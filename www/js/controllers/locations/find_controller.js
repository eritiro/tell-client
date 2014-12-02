'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location, $window, historyService, backButtonService) {

  $scope.go = function(id) {
    if($scope.searchName) {
      $location.search("name", $scope.searchName);
    }
    $location.search("backto", $location.url());

    $location.path("/locations/" + id);
  };

  $scope.back = function(){
    backButtonService.back();
  };

  $scope.search = function(){
    Location.find({ name: $scope.nameToSearch }, function(locations) {
      $scope.locations = locations;
      $scope.searchName = $scope.nameToSearch;
    });
  };

  $scope.searchName = $routeParams.name;
  $scope.nameToSearch = $scope.searchName; // they are the same at the begining and when you press search.
  $scope.support = config.support;
  if($scope.searchName) {
    $scope.search();
  } else {
    $scope.locations = historyService.get();
  }
});
