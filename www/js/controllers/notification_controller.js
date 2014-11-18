'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession) {

  $scope.notifications = Notification.query();
  $rootScope.notificationsCount = 0;
  $scope.go = function(notification) {
    if (notification.type === 'invite') {
      $location.path("/users/" + notification.from_id);
    } else {
      $location.path("/users/" + notification.from_id + "/chat");
    }
  };

});
