'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location, $window) {

  $scope.go = function(id) {
    $location.path("/locations/" + id);
  };

  $scope.back = function(){
    $window.history.back();
  }

  $scope.search = function(){
    Location.find({ name: $scope.searchName }, function(locations) {
      $scope.locations = locations;
      $location.search("name", $scope.searchName);
    });
  }

  $scope.searchName = $routeParams.name;
  $scope.support = config.support;
  $scope.search();

});
