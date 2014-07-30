'use strict';

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
    AuthProvider.loginPath('http://tell.startmeapps.com/users/sign_in.json');
  })
  .controller('Home', function(Auth) {
    var credentials = {
        email: 'test@test.com',
        password: 'test'
    };

    Auth.login(credentials).then(function(user) {
        document.getElementById("console").innerHTML = 'user ' + user;
    }, function(error) {
        document.getElementById("console").innerHTML = 'error ' + error;
        console.log(error); // => {id: 1, ect: '...'}
    });
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
