'use strict';

angular.module('tell.controllers')
  .controller('AuthController', function(Auth, $scope, $location, userSession, facebookService, $http) {

    var tryLogin = function(credentials) {
      $scope.ready = false;
      Auth.login(credentials).then(function(user) {
        userSession.storeUser(user);
        $location.path("/home");
      }, function(error) {
        $scope.ready = true;
        $scope.error = "email o password incorrecto.";
      });
    }

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

    $scope.ready = true;
  });

