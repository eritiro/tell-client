"use strict";

angular.module('tell.directives')
  .directive("tellTabs", function ($rootScope, $location, User) {

    var user;
    User.profile({}, function(userData) {
      $rootScope.notificationsCount = userData.unread_notifications;
      $rootScope.attendingLocationId = userData.attending_location_id;
      user = userData;
    });

    return {
      templateUrl: 'partials/tabs.html',
      link: function(scope, element, attrs) {

        scope.searching = false;

        scope.search = function(){
          scope.searching = true;
        }
      }
    };
  });