'use strict';

angular.module('tell.controllers')
  .controller('CommentsController', function($scope, $routeParams, Comment, $resource) {
    var id = $routeParams.locationId;
    var score = $routeParams.score;
    
    $scope.score = score;
    $scope.text = 'Pomelo es JIPI. Pomelo es puto. SE ESCRIBE JIPI.';
    
    $scope.send = function() {
      var comment = new Comment({ locationId: id });
      comment['text'] = $scope.text;
      comment['score'] = $scope.score;
      comment.$save();
    }
  });
