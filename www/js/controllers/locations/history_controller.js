'use strict';

angular.module('tell.controllers')
  .controller('LocationsHistoryController', function($scope, $routeParams, historyService) {
    $scope.locations = historyService.get();
    $.each($scope.locations, function(index, location){
      location.when = moment(location.when).fromNow();
    });
  });
