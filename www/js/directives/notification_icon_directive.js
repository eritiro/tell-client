"use strict";
angular.module('tell.directives').directive('notificationIcon', function ($rootScope, User, $location) {

  User.profile({}, function(user) {
    $rootScope.notificationsCount = user.unread_notifications;
  });
  return {
    link: function($scope, element, attrs) {
      $scope.showNotifications = function() {
        $location.path("/notifications");
      };
    },
    templateUrl: 'partials/notification_icon.html'
  };
});