'use strict';

angular.module('tell.controllers')
  .controller('AuthController', function(Auth, $scope, $location, userSession, facebookService, $http) {

    var tryLogin = function(credentials) {
      Auth.login(credentials).then(function(user) {
        user.password = credentials.password;

        userSession.storeUser(user);
        $location.path("/home");
      }, function(error) {
        // TODO ver qué hacer con error de auth
      });
    }

    $scope.error = false;

    $scope.submit = function() {
      var credentials = {
        email: $scope.userEmail,
        password: $scope.userPass
      };

      tryLogin(credentials);
    };

    $scope.fbLogin = function() {
      facebookService.login();
    };
  });

