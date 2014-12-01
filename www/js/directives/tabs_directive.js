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

        scope.go = function(action) {
        if (isSelected(action)) {
          return;
        }

        if (action === 'location') {
          // TODO ver cómo se maneja esto cuando el user no va a ningúna location aun
          $location.path('/locations/' + user.attending_location_id + '/');
          return;
        }

        if (action === 'find') {
          if (scope.status === 'idle') {
            scope.status = 'search';
            return;
          }

          if (scope.query) {
            $location.path("/locations").search("name", scope.query);
          } else {
            scope.status = 'idle';
          }

          return;
        }

        $location.path(action);
        };
      }
    };
  });