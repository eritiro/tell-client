'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location, $window, historyService) {

  $scope.go = function(id) {
    $location.path("/locations/" + id);
  };

  $scope.back = function(){
    $window.history.back();
  };

  $scope.search = function(){
    Location.find({ name: $scope.searchName }, function(locations) {
      $scope.locations = locations;
      $location.search("name", $scope.searchName);
    });
  };

  $scope.searchName = $routeParams.name;
  $scope.support = config.support;
  if($scope.searchName) {
    $scope.search();
  } else {
    $scope.locations = historyService.get();
  }
});
