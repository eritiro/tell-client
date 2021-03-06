'use strict';

angular.module('tell.services').service('facebookService', function() {

  var permissions = ["public_profile", "email", "user_birthday", "user_photos"];

  this.login = function(s, f) {
    try {
      facebookConnectPlugin.login(
        permissions,
        function(data) {
          s(data.authResponse);
        }, function(data){
          f(data);
        });
    } catch (e) {
      f(e);
    }
  };
});
