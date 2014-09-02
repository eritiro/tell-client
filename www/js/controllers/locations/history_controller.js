'use strict';

angular.module('tell.controllers')
  .controller('LocationsHistoryController', function($scope, $routeParams, historyService, $window) {
    $scope.$on("back_button", function() {
      $window.history.back();
    });
    
    $scope.locations = historyService.get();
    $.each($scope.locations, function(index, location){
      location.when = moment(location.when).fromNow();
    });
  });
