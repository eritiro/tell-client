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
  
  this.loggedMenuOptions = function() {
    return [
      { name: "Desconectar", onclick: logout },
      { name: "Salir", onclick: exit }
    ];
  };
});