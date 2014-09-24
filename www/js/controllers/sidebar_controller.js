'use strict';

angular.module('tell.controllers')
  .controller('SidebarController', function($scope, Auth, $location, userSession, menuButtonService) {
    
    $scope.logout = function() {
      Auth.logout().then(function(oldUser) {
        userSession.logout();
        menuButtonService.closeMenu();
        $location.path("/users/sign_up_selection");
      });
    };
    
    $scope.exit = function() {
      menuButtonService.closeMenu();
      navigator.app.exitApp();
    };
    
  });
