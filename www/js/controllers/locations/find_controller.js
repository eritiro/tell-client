'use strict';

angular.module('tell.controllers').controller('LocationsFindController', function($scope, $routeParams, Location, $location, $window, historyService, backButtonService, imageLoader) {

  function loadImages(locations){
    angular.forEach(locations, function(location, key) {
      imageLoader.preload(location, "thumb", "img/thumb-default.jpg");
    });
  }

  $scope.go = function(id) {
    if($scope.searchName) {
      $location.search("name", $scope.searchName);
    } else {
      $location.search("name", null);
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
      $scope.searchName = currentSearch;
      $scope.locations = historyService.get();
      loadImages($scope.locations);
      $scope.type = 'history';
    } else {
      Location.find({ name: currentSearch }, function(locations) {
        if(currentSearch === $scope.nameToSearch){
          $scope.locations = locations;
          loadImages($scope.locations);
          $scope.searchName = currentSearch;
          $scope.type = 'search';
        }
      });
    }
  };

  // Performs search and closes the keyboard
  $scope.forceSearch = function(){
    var searchInput = $("input[type=search");
    searchInput.attr('readonly', 'readonly');
    setTimeout(function() {
      searchInput.blur();
      searchInput.removeAttr('readonly');
      $scope.search();
    }, 100);
  };

  $scope.searchName = $routeParams.name;
  $scope.nameToSearch = $scope.searchName; // they are the same at the begining and when you press search.
  $scope.support = config.support;
  $scope.search();
});
