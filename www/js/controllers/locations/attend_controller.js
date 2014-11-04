'use strict';

angular.module('tell.controllers').controller('LocationsAttendController', function($scope, $routeParams, Location, $location) {

    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
    });

    $scope.attending = function() {
      Location.attend(function(){
        $location.path("/locations/" + $routeParams.id + "/show");
      }, function() {
        alert("Ha ocurrido un error, intenta luego por favor");
      });
    };
});
