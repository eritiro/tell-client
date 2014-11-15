'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $routeParams, $location, Notification) {

  $scope.notifications = Notification.query();

  $scope.go = function(notification) {
		if (notification.type === 'invite') {
			$location.path("/users/" + notification.from_id);
		} else {
			// type === 'message'
			$location.path("/users/" + notification.from_id + "/chat");
		}
  };

});
