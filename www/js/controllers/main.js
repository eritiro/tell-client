'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/scan', {templateUrl: 'partials/scan.html', controller: 'Scan'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

/* Controllers */
angular.module('myApp.controllers', [])
  .controller('Home', ['$scope', function($scope) {

  }])
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
