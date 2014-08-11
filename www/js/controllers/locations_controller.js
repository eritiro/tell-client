'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, $resource) {
    var Location = $resource(
      config.serverUrl + '/locations.json?username=eritiro&req=:afipReq', 
      { afipReq: "@id" });
    
    Location.get({ afipReq: $routeParams.afipReq }, function(location) {
       $scope.location = location;
       $scope.relative = function(src) { return config.serverUrl + src; };
     });
  });
