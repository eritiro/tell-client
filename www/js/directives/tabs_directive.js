"use strict";

angular.module('tell.directives')
  .directive("tellTabs", function ($location, userSession) {
    return {
      templateUrl: 'partials/tabs.html',
      link: function(scope, element, attrs) {
        scope.currentUrl = $location.url();
        scope.user = userSession.currentUser();
      }
    };
  });