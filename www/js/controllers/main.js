'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com/users/sign_in.json'
};

var POMELO = {
  serverUrl: 'http://192.168.0.6/users/sign_in.json'
};

var config = POSTA;

angular.module('tell.repos', []);
angular.module('tell', [
  'ngRoute',
  'tell.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'Index'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/scan', {templateUrl: 'partials/scan.html', controller: 'Scan'});
  $routeProvider.when('/register', {templateUrl: 'partials/location.html', controller: 'Scan'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

// TODO mover a un modulo de angular
var repo = {
  key: 'tell.user.data',
  storeData: function(userData) {
    localStorage.setItem(this.key, angular.toJson(userData));
  },
  getData: function() {
    return angular.fromJson(localStorage.getItem(this.key));
  }
};

/* Controllers */
angular.module('tell.controllers', ['Devise'])
  .config(function(AuthProvider) {
    AuthProvider.loginPath(config.serverUrl);
  })
  .controller('Index', function(Auth, $scope, $location) {
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
        repo.storeData(user);
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

// Lanzar angular cuando se recibe el deviceready
document.addEventListener("deviceready", function() {
  document.getElementById('loading').style.display = 'none';
  angular.bootstrap(document, ['tell']);
}, false);

