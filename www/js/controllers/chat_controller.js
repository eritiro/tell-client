'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location, $routeParams, User, userSession, $resource, $window, backButtonService, $timeout, dialog) {
  $scope.me = userSession.currentUser();
  $scope.listen = 0;
  var user;
  User.get({ id: $routeParams.id }, function(u) {
    user = u;
    $scope.user = user;
  });

  var Message = $resource(
    config.serverUrl + '/users/:userId/messages/:messageId',
    { userId: $routeParams.id, messageId:'@id' },
    { }
  );

  Message.query(function(data){
    $scope.messages = data;
    $timeout(function(){
      $(".chat-box").scrollTop(1000000);
    } );
  });

  $scope.chat = function() {
    if (!$scope.message) {
      return;
    }

    var message = new Message({ text: $scope.message, status: 'sent' });
    message.$save(function(message){
      message.status = 'arrived';
      userSession.notify(message.notification, $scope.user.unread_notifications);
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
    if($routeParams.id === notification.from.id.toString() && notification.type === "message") {
      $scope.messages.push({ text: notification.text, mine: false});
      $scope.listen++; // Force angular to perform render
    }
  });

  $scope.deleteMessage = function(message){
    dialog.confirm("¿Querés borrar el mensaje?", function(result){
      Message.delete({ messageId: message.id });
      $scope.messages = $.grep($scope.messages, function(m){
        return m.id !== message.id;
      });
    });
  };

  $scope.back = function(){
    backButtonService.back();
  };
});
