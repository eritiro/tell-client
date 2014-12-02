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
    var currentSearch = $scope.nameToSearch;
    if(!currentSearch) {
      $scope.locations = historyService.get();
    } else {
      Location.find({ name: currentSearch }, function(locations) {
        if(currentSearch === $scope.nameToSearch){
          $scope.locations = locations;
          $scope.searchName = currentSearch;
        }
      });
    }
  };

  $scope.searchName = $routeParams.name;
  $scope.nameToSearch = $scope.searchName; // they are the same at the begining and when you press search.
  $scope.support = config.support;
  $scope.search();
});
