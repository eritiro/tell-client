'use strict';

angular.module('tell.controllers')
  .controller('UsersController', function(Auth, User, $scope, $location, userSession, formHelper, facebookService) {

    $scope.user = new formHelper.Model();
    $scope.user.device_token = registrationId;
    $scope.login_ready = true;

    function nextStep(user){
      $location.path("/feeds");
    }

    $scope.fbLogin = function() {
      $scope.login_ready = false;
      facebookService.login(
        function(fbUserData) { // FB login ok
          $scope.$apply(function(){
            User.facebook({token: fbUserData.accessToken, device_token: registrationId }, function(user) {
              userSession.storeUser(user);
              $('.welcome').animate({ opacity: 1 }, 800, "swing",function(){
                $scope.$apply(function(){
                  nextStep(user);
                });
              });
            });
          });
        },
        function(errorData) { // FB login error
          $scope.login_ready = true;
          console.log("Falló login FB " + JSON.stringify(errorData));
        }
      );
    };
  });
