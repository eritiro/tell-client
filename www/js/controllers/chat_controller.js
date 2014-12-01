'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location, $routeParams, User, userSession, $resource, $window) {
  $scope.me = userSession.currentUser();

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

  $scope.messages = Message.query();

  $scope.chat = function() {
    if (!$scope.message) {
      return;
    }

    $scope.error = false; // TODO error handling
    var message = new Message({ text: $scope.message });
    message.$save();

    message.mine = true;
    $scope.messages.push(message);
    $scope.message = "";
  };

  $scope.showUser = function(){
    $location.path("/users/" + $routeParams.id);
  };

  $scope.$on('notification',function(event, notification){
    if($routeParams.id === notification.from_id.toString() && notification.type === "message") {
      $scope.messages.push({ text: notification.text, mine: false});
    }
  });

  $scope.back = function(){
    $window.history.back();
  };
});
