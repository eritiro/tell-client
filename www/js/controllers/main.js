'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com/users/sign_in.json'
};

var POMELO = {
  serverUrl: 'http://192.168.0.6/users/sign_in.json'
};

var config = POSTA;

// Declare app level module which depends on filters, and services
angular.module('tell', [
  'ngRoute',
  'tell.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/scan', {templateUrl: 'partials/scan.html', controller: 'Scan'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

/* Controllers */
angular.module('tell.controllers', ['Devise'])
  .config(function(AuthProvider) {
    AuthProvider.loginPath(config.serverUrl);
  })
  .controller('Home', function(Auth, $scope, $location) {
    $scope.userEmail = 'test@test.com';
    $scope.userPass = 'test';
    
    $scope.submit = function() {
      var credentials = {
        email: $scope.userEmail,
        password: $scope.userPass
      };
      
      Auth.login(credentials).then(function(user) {
        console.log("Todo ok");
        $location.path("/scan");
      }, function(error) {
        console.log("Caca");
      });
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

document.addEventListener("deviceready", function() {
  document.getElementById('loading').style.display = 'none';
  angular.bootstrap(document, ['tell']);
}, false);
