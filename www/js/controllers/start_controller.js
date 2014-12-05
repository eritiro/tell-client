'use strict';

angular.module('tell.controllers').controller('StartController', function(userSession, $location) {
  if (userSession.currentUser()) {
    $location.path("/feeds");
  } else {
    $location.path("/users/sign_up_selection");
  }
});
