'use strict';

angular.module('tell.controllers').controller('StartController', function(userSession, $location, User, $rootScope) {
  var currentUser = userSession.currentUser();

  if (!currentUser) {
    $location.path("/users/sign_up_selection");
    return;
  }

  var redirect = true;

  $rootScope.$on("dontRedirect", function(){
    redirect = false;
  });

  User.profile({}, function(user) {
    $rootScope.notificationsCount = user.unread_notifications;
    $rootScope.attendingLocationId = user.attending_location_id;
    if(redirect) {
      $location.path("/feeds");
    }
  });

});
