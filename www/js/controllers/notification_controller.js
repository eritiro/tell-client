'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession) {

  $scope.notifications = userSession.currentUser().notifications;
  $rootScope.notificationsCount = 0;

  $scope.$on('notification',function(event, notification){
    var newList = $scope.notifications.filter(function(n) { return n.from_id !== notification.from_id || n.type !== notification.type; });
    newList.unshift(notification);
    $scope.notifications = newList;
  });

  $scope.go = function(notification) {
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
