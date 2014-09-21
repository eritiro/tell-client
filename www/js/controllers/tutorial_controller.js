'use strict';

angular.module('tell.controllers').controller('TutorialController', function($scope, $location, $routeParams, User, currentUser, userSession) {

  $scope.next = function() {
    $location.path("tutorial/" + (parseInt($routeParams.step)+ 1));
  }

  $scope.endTutorial = function(){
    currentUser.completed_tutorial = true
    User.update({ user: currentUser }, function() {
      userSession.storeUser(currentUser);
      $location.url("/home");
    });
  }
});
