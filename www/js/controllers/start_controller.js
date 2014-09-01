'use strict';

angular.module('tell.controllers').controller('StartController', function(currentUser, $location, $rootScope) {
  document.addEventListener("backbutton", function() {
    $rootScope.$broadcast('back_button');
  }, false);

  if (currentUser)
    $location.path("/home");
  else {
    $location.path("/users/sign_up_selection");
  }
});
