'use strict';

angular.module('tell.controllers').controller('StartController', function(userSession, $location) {
  var currentUser = userSession.currentUser();

  if (!currentUser) {
    $location.path("/users/sign_up_selection");
    return;
  }

  $location.path("/home");
});
