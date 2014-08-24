'use strict';

angular.module('tell.controllers')
  .controller('CommentsController', function($scope, $routeParams, Location, Comment, $window, $location) {
    var locationId = $routeParams.locationId;
    var score = $routeParams.score;

    $scope.score = score;
    $scope.text = 'Pomelo es JIPI. Pomelo es puto. SE ESCRIBE JIPI.';

    $scope.setScore = function(index) {
      $scope.score = index+1;
    }

    $scope.send = function() {
      var comment = new Comment({ locationId: locationId });
      comment['text'] = $scope.text;
      comment['score'] = $scope.score;
      comment.$save(function(){
        Location.stale(locationId);
        $window.history.back();
      });
    }
  });
