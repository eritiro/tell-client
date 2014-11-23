'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, User, $scope, $location, userSession, formHelper, facebookService) {

    $scope.user = new formHelper.Model();
    $scope.user.device_token = registrationId;

	Auth.logout().then(function() {
      userSession.logout();
    });

    function nextStep(user){
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
          console.log("Falló login FB " + JSON.stringify(errorData));
        }
      );
    };
  });
