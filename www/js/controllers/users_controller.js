'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, $scope, $location, userSession, facebookService, $rootScope) {

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
      facebookService.login(
        function(fbUserData) { // FB login ok
          document.querySelector("#debug").innerHTML = "Login con FB!!! " + JSON.stringify(fbUserData);

          // TODO pegarle al server y obtener user
          var user = {
             "id":3,
             "username":"test",
             "email":"test@test.com",
             "created_at":"2014-07-29T23:05:11.000Z",
             "updated_at":"2014-08-20T01:01:19.717Z",
             "picture_file_name":null,
             "picture_content_type":null,
             "picture_file_size":null,
             "picture_updated_at":null,
             "authentication_token":"28x9DULhkWn4Nsw-v_d2"
          };

          userSession.storeUser(user);
          $location.path("/home");

          // Hack to make angular work with corodva barcode plugin
          if (!$rootScope.$$phase) {
            $scope.$apply();
          }
        },
        function(errorData) { // FB login error
          document.querySelector("#debug").innerHTML = "Falló login FB " + JSON.stringify(errorData);
        }
      );
    };

    $scope.ready = true;
  });

