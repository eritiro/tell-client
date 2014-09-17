'use strict';

angular.module('tell.controllers').controller('TutorialController', function($scope) {

  $scope.step = 0;

  $scope.next = function() {
    $scope.step++;
  }
});
