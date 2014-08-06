'use strict';

angular.module('tell.controllers')
  .controller('AuthController', function(Auth, $scope, $location, userStorageService) {
    $scope.userEmail = 'test@test.com';
    $scope.userPass = 'test';
    $scope.error = false;

    $scope.submit = function() {
      var credentials = {
        email: $scope.userEmail,
        password: $scope.userPass
      };

      Auth.login(credentials).then(function(user) {
        userStorageService.storeData(user);
        $location.path("/home");
      }, function(error) {
        // TODO ver qué hacer con error de auth
        $scope.error = true;
        $scope.userEmail = 'HOLIS';
      });
    }
  });

