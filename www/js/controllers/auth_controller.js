'use strict';

angular.module('tell.controllers')
  .controller('AuthController', function(Auth, $scope, $location, userStorageService, facebookService, $http) {

    var tryLogin = function(credentials) {
      Auth.login(credentials).then(function(user) {
        user.password = credentials.password;
        $http.defaults.headers.common['User-Id'] = user.id;
        $http.defaults.headers.common['User-Token'] = user.authentication_token;

        userStorageService.storeData(user);
        $location.path("/home");
      }, function(error) {
        // TODO ver qué hacer con error de auth
      });
    }

    var userData = userStorageService.getData();
    if (userData) {
      var credentials = {
        email: userData.email,
        password: userData.password
      };

      tryLogin(credentials);
    }

    $scope.userEmail = 'test@test.com';
    $scope.userPass = 'test';
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

