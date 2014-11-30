"use strict";

angular.module('tell.directives')
.directive("tellTabs", function ($rootScope, $location, User) {
  return {
    templateUrl: 'partials/tabs.html',
    link: function(scope, element, attrs) {
			var isSelected = function(action) {
				return $location.path().indexOf(action) >= 0;
			};
			
      scope.active = isSelected;
			scope.go = function(action) {
				if (isSelected(action)) {
					return;
				}
				
				if (action === 'location') {
					// TODO ver cómo se maneja esto cuando el user no va a ningúna location aun
					User.profile({}, function(user) {
						$location.path('/locations/' + user.attending_location_id + '/');
					});
					
					return;
				}
				
				if (action === 'find') {
					// TODO desplegar un input medio loco
					return;
				}
				
				$location.path(action);
			}
    }
  };
});