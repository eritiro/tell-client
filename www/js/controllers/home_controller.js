'use strict';

angular.module('tell.controllers')
  .controller('HomeController', function($scope, $rootScope, $location, userSession) {

    $scope.find = function() {
      var name = $scope.name;
      $location.path("/locations").search("name", name);
    };
  });
