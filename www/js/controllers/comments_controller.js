'use strict';

angular.module('tell.controllers')
  .controller('CommentsController', function($scope, $routeParams) {
    var id = $routeParams.locationId;
    var score = $routeParams.score;
    
    $scope.score = score;
    
    $scope.send = function(){
      alert(id);
    }
  });
