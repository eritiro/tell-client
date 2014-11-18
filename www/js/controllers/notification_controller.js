'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession) {

  $scope.notifications = Notification.query();
  $rootScope.notificationsCount = 0;

  $scope.$on('notification',function(event, notification){
    var newList = $scope.notifications.filter(function(n) { return n.from_id !== notification.from_id || n.type !== notification.type; });
    newList.unshift(notification);
    $scope.notifications = newList;
  });

  $scope.go = function(notification) {
    if (notification.type === 'invite') {
      $location.path("/users/" + notification.from_id);
    } else {
      $location.path("/users/" + notification.from_id + "/chat");
    }
  };

});
