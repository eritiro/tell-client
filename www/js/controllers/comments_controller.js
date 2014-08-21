'use strict';

angular.module('tell.controllers')
  .controller('CommentsController', function($scope, $routeParams, Comment, $window) {
    var id = $routeParams.locationId;
    var score = $routeParams.score;
    
    $scope.score = score;
    $scope.text = '';
    
    $scope.setScore = function(index) {
      $scope.score = index+1;
    }
    
    $scope.send = function() {
      if (!$scope.text) {
        // TODO decidir si se puede o no postear sin mensaje
        return;
      }
      
      var comment = new Comment({ locationId: id });
      comment['text'] = $scope.text;
      comment['score'] = $scope.score;
      comment.$save();
      $window.history.back();
    }
  });
