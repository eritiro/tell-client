'use strict';

angular.module('tell.controllers').controller('StartController', function(currentUser, $location) {

  if (!currentUser) {
    $location.path("/users/sign_up_selection");
    return;
  }

  if(currentUser.completed_tutorial) {
    $location.path("/home");
  } else {
    $location.path("/tutorial/1");
  }
});
