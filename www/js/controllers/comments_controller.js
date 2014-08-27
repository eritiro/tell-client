(function () {
  "use strict";

  angular.module('tell.controllers')
    .controller('CommentsController', function ($scope, $routeParams, Location, Comment, $window, $location) {
      var locationId = $routeParams.locationId,
        score = $routeParams.score;

      $scope.score = score;
      $scope.text = '';

      $scope.setScore = function(index) {
        $scope.score = index+1;
      }

      $scope.send = function() {
        var comment = new Comment({ locationId: locationId });
        comment['text'] = $scope.text;
        comment['score'] = $scope.score;

        comment.$save(function (){
          Location.stale(locationId);
          $window.history.back();
        });
      }
    });
})();