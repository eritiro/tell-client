'use strict';

angular.module('tell.controllers').controller('StartController', function(currentUser, $location) {
  if (currentUser)
    $location.path("/home");
  else {
    $location.path("/users/sign_up_selection");
  }
});
