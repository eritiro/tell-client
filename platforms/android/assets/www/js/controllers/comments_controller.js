(function () {
  "use strict";

  angular.module('tell.controllers')
    .controller('CommentsController', function ($scope, $routeParams, Location, Comment, $window, $location, formHelper) {

      var locationId = $routeParams.locationId
      $scope.comment = new Comment();
      $scope.comment.locationId = locationId;
      $scope.comment.score = $routeParams.score;
      $scope.comment.text = ""; // initialization just to avoid bad requests when empty.

      $scope.setScore = function(index) {
        $scope.comment.score = index+1;
      }

      $scope.send = function() {
        $scope.comment.$save(function (){
          Location.stale(locationId);
          $window.history.back();
        }, function(){
          $scope.comment.errors = true;
        });
      }
    });
})();