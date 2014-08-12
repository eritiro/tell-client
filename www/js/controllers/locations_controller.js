'use strict';

angular.module('tell.controllers')
  .controller('LocationsController', function($scope, $routeParams, $resource, userStorageService, $location) {
    var Location = $resource(
      config.serverUrl + '/locations.json?username=:user&req=:afipReq', 
      { afipReq: "@id", user: "@id" });
    
    var userData = userStorageService.getData();
    if (!userData) {
      // TODO esta validación debería hacerse en otro lado. A nivel ruteo me parece
      $location.path("/home");
      return;
    }
    
    Location.get({ afipReq: $routeParams.afipReq, user: userData.username }, function(location) {
       $scope.location = location;
       $scope.relative = function(src) { return config.serverUrl + src; };
     });
  });
