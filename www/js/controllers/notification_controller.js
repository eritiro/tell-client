'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession) {

  $scope.user = userSession.currentUser();
  $rootScope.notificationsCount = 0;

  $scope.go = function(notification) {
    notification.read = true;
    userSession.save();
    $location.search("backto", "/notifications");
    if (notification.type === 'invite') {
      $location.path("/users/" + notification.from_id);
    } else {
      $location.path("/users/" + notification.from_id + "/chat");
    }
  };

  $scope.swipeRight = function(){
    $location.path("/locations/attendees");
  };
});
