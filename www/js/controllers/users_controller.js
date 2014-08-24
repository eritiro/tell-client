'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, $scope, $location, userSession, facebookService, $http) {

    $scope.signIn = function() {
      $scope.ready = false;
      Auth.login($scope.user).then(function(user) {
        userSession.storeUser(user);
        $location.path("/home");
      }, function(error) {
        $scope.ready = true;
        $scope.error = "email o password incorrecto.";
      });
    };

    $scope.signUp = function() {
      Auth.register($scope.user).then(function(user) {
        userSession.storeUser(user);
        $location.path("/home");
      }, function(error) {
        $scope.ready = true;
        $scope.error = error;
      });
    };

    $scope.fbLogin = function() {
      facebookService.login();
    };

    $scope.ready = true;
  });

