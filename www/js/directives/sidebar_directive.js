"use strict";

angular.module('tell.directives')
.directive("tellSidebar", function ($rootScope, menuOptionsService, $location) {
  return {
    templateUrl: 'partials/sidebar.html',
    link: function(scope, element, attrs) {
      element.hide();
      
      var handleMenuButton = function() {
        if (element.is(':hidden')) {
          element.show();
        } else {
          element.hide();
        }
      };
      
      scope.menuoptions = menuOptionsService.getOptionsForPath($location.path());
      
      document.addEventListener("menubutton", handleMenuButton, false);
      
      element.on('$destroy', function() {
        document.removeEventListener("menubutton", handleMenuButton, false);
      });
    }
  };
});