'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, $location) {

    var location = null;
    Location.get({ id: $routeParams.id }, function(loc) {
      location = loc;
      $scope.location = location;
    });

    $scope.attending = function() {
      location.$attend({ id: $routeParams.id }, function(){
        $location.path("/locations/" + $routeParams.id + "/attendees");
      }, function() {
        alert("Ha ocurrido un error, intenta luego por favor");
      });
    };
});
