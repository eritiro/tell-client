'use strict';

angular.module('tell.controllers')
  .controller('HistoryController', function($scope, $routeParams, Location) {
    $scope.locations = [{ id: 2, name: 'La americana', when: 'Hoy' }, { id: 8, name: 'Juguetes', when: 'Hace 3 días' }];
  });
