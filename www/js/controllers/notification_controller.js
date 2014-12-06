'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession) {

  $scope.user = userSession.currentUser();

  $scope.go = function(notification) {
    if(!notification.read) {
      $scope.user.unread_notifications--;
      notification.read = true;
      userSession.save();
    }
    $location.search("backto", "/notifications");
    if (notification.type === 'invite') {
      $location.path("/users/" + notification.from.id);
    } else {
      $location.path("/users/" + notification.from.id + "/chat");
    }
  };

  $scope.swipeRight = function(){
    $location.path("/locations/attendees");
  };
});
