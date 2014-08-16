'use strict';

angular.module('tell.controllers')
  .controller('CommentsController', function($scope) {
    $scope.test = 0;
    $scope.send = function(){
      alert(1);
    }
  });
