'use strict';

angular.module('tell.services').service('menuOptionsService', function(Auth, userSession, $location) {
  var that = this;

  var exit = function() {
      navigator.app.exitApp();
  };

  var logout = function() {
    Auth.logout().then(function(oldUser) {
      userSession.logout();
      $location.path("/users/sign_up_selection");
    });
  };

  var loggedMenuOptions = [
    { name: "Cerrar sesión", onclick: logout },
    { name: "Salir", onclick: exit }
  ];

  var notLoggedMenuOptions = [
    { name: "Salir", onclick: exit }
  ];

  this.getOptionsForPath = function(path) {
    return userSession.currentUser() ? loggedMenuOptions : notLoggedMenuOptions;
  };
});