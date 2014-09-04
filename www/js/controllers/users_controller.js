'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, User, $scope, $location, userSession, formHelper, facebookService, $rootScope) {

    $scope.user = new formHelper.Model();
    $scope.user.username = $location.search()["guessed_username"]

    function nextStep(user){
      if(user.username)
        $location.path("/home");
      else {
        $location.search("guessed_username", user.guessed_username)
        $location.path("/users/username");
      }
    }

    $scope.signIn = function() {
      Auth.login($scope.user).then(function(user) {
        userSession.storeUser(user);
        nextStep(user);
      }, function(response) {
        $scope.error = "email o password incorrecto.";
      });
    };

    $scope.signUp = function() {
      Auth.register($scope.user).then(function(user) {
        userSession.storeUser(user);
        nextStep(user);
      }, $scope.user.showErrors);
    };

    $scope.setUsername = function() {
      User.update({ user: $scope.user }, function() {
        $location.url("/home");
      }, $scope.user.showErrors);
    };

    $scope.fbLogin = function() {
      facebookService.login(
        function(fbUserData) { // FB login ok
          User.facebook({token: fbUserData.accessToken}, function(user) {
            userSession.storeUser(user);
            nextStep(user);
          });

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
  });

