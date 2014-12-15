'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location, $routeParams, User, userSession, $resource, $window, backButtonService, $timeout, dialog, Message, messageCache) {
  $scope.me = userSession.currentUser();
  $scope.listen = 0;
  $scope.username = $routeParams.username;

  function scrollDown(){
    $timeout(function(){
      $(".chat-box").scrollTop(1000000);
    } );
  }

  $scope.messages = messageCache.get($routeParams.id);
  scrollDown();
  Message.query({ userId: $routeParams.id }, function(data){
    $scope.messages = messageCache.set($routeParams.id, data);
    scrollDown();
  });

  $scope.chat = function() {
    if (!$scope.message) {
      return;
    }

    var message = new Message({ text: $scope.message, status: 'sent' });
    message.$save({ userId: $routeParams.id }, function(message){
      message.status = 'arrived';
      messageCache.set($routeParams.id, $scope.messages);
      userSession.notify(message.notification);
    }, function(){
      message.status = 'error';
    });

    message.mine = true;
    $scope.messages.push(message);
    $scope.message = "";
  };

  $scope.showUser = function(){
    $location.path("/users/" + $routeParams.id);
  };

  $scope.$on('notification',function(event, notification){
    $scope.listen++; // Force angular to perform render
  });

  $scope.deleteMessage = function(message){
    dialog.confirm("¿Querés borrar el mensaje?", function(result){
      Message.delete({ userId: $routeParams.id, messageId: message.id });
      $scope.messages = $.grep($scope.messages, function(m){
        return m.id !== message.id;
      });
      messageCache.set($routeParams.id, $scope.messages);
    });
  };

  $scope.back = function(){
    backButtonService.back();
  };
});
