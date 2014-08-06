'use strict';

angular.module('tell.controllers')
  .config(function(AuthProvider) {
    AuthProvider.loginPath(config.serverUrl);
  })
  .controller('Index', function(Auth, $scope, $location, userStorageService) {
    if (Auth.isAuthenticated()) {
      $location.path("/home");
      return;
    }

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
  })
  .controller('Home', function($scope, $location) {
    $scope.prueba = 'asdfasdfa';

    $scope.scan = function() {
      $location.path("/scan");
    }
  })
  .controller('Scan', ['$scope', function($scope) {
  	// TODO mover a algún lado (servicios?)
	  cordova.plugins.barcodeScanner.scan(
		  function (result) {
			  $scope.result = result.text;
		  },
		  function (error) {
			  $scope.result = "Falló el scan: " + error;
		  }
	  );
  }]);

