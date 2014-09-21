'use strict';

angular.module('tell.controllers').controller('TutorialController', function($scope, $location, $routeParams, User, userSession) {

  $scope.next = function() {
    $location.path("tutorial/" + (parseInt($routeParams.step, 10)+ 1));
  };

  $scope.endTutorial = function(){
    var currentUser = userSession.currentUser();
    currentUser.completed_tutorial = true;
    User.update({ user: currentUser }, function() {
      userSession.storeUser(currentUser);
      $location.url("/home");
    });
  };
});
