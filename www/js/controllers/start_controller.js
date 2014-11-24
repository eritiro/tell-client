'use strict';

angular.module('tell.controllers').controller('StartController', function(userSession, $location, User, $rootScope) {
  var currentUser = userSession.currentUser();

  if (!currentUser) {
    $location.path("/users/sign_up_selection");
    return;
  }
  User.profile({}, function(user) {
    if(user.attending_location_id) {
      $location.path("/locations/" + user.attending_location_id + "/attendees");
    } else {
      $location.path("/home");
    }
  });
});
