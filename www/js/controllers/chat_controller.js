'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location, $routeParams, User, userSession, $resource) {
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

  $scope.comments = Message.query();

  $scope.chat = function() {
    if (!$scope.comment) {
      return;
    }

    $scope.error = false; // TODO error handling
    var message = new Message({ text: $scope.comment });
    message.$save();

    message.mine = true;
    $scope.comments.push(message);
    $scope.comment = "";
  };

  $scope.showUser = function(){
    $location.path("/users/" + $routeParams.id);
  };

  $scope.$on('notification',function(event, notification){
    if($routeParams.id === notification.from_id.toString() && notification.type === "message") {
      $scope.comments.push({ text: notification.text, mine: false});
    }
  });
});
