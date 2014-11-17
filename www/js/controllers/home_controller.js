'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $rootScope, $location, userSession) {
    $rootScope.notificationsCount = userSession.getUnreadNotifications();

    $scope.find = function() {
      var name = $scope.name;
      $location.path("/locations").search("name", name);
    };

    $scope.notifications = function() {
      var name = $scope.name;
      $location.path("/notifications");
    };

  });
