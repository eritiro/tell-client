'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, User, $scope, $location, userSession, formHelper, facebookService) {

    $scope.user = new formHelper.Model();
    $scope.user.device_token = registrationId;

    function nextStep(user){
      if(!user.username){
        user.username = user.guessed_username;
      }

      $location.path("/home");
    }

    $scope.fbLogin = function() {
      facebookService.login(
        function(fbUserData) { // FB login ok
          $scope.$apply(function(){
            User.facebook({token: fbUserData.accessToken, device_token: registrationId }, function(user) {
              userSession.storeUser(user);
              nextStep(user);
            });
          });
        },
        function(errorData) { // FB login error
          document.querySelector("#debug").innerHTML = "Falló login FB " + JSON.stringify(errorData);
        }
      );
    };
  });
