'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, $resource) {
    var Location = $resource(config.serverUrl + '/locations/:locationId.json?username=eritiro',
      {locationId: "@id"});
    Location.get({locationId: $routeParams.locationId}, function(location) {
       $scope.location = location
     });
  });