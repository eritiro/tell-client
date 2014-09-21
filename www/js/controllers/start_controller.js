'use strict';

angular.module('tell.controllers').controller('StartController', function(userSession, $location) {
  var currentUser = userSession.currentUser();

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
