"use strict";

angular.module('tell.directives')
  .directive("tellTabs", function ($location) {
    return {
      templateUrl: 'partials/tabs.html',
      link: function(scope, element, attrs) {
        scope.currentUrl = $location.url();
      }
    };
  });