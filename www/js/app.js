'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com'
};

var POMELO = {
  serverUrl: 'http://192.168.1.104'
};

var config = POSTA;

angular.module('tell.services', []);
angular.module('tell.resources', ['ngResource', 'tell.services']);
angular.module('tell.controllers', ['Devise', 'tell.resources', 'tell.services']);

angular.module('tell', [
  'ngRoute',
  'tell.controllers',
  'tell.services',
  'tell.resources'
])
.config(function($routeProvider) {
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'AuthController'});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'AuthController'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/scan', {templateUrl: 'partials/scan.html', controller: 'ScanController'});
  $routeProvider.when('/locations/:id', {templateUrl: 'partials/location.html', controller: 'LocationsController'});
  $routeProvider.otherwise({redirectTo: '/home'});
})
.config(function(AuthProvider){
  AuthProvider.loginPath(config.serverUrl + '/users/sign_in.json');
});

// Angular bootstrap
document.addEventListener("deviceready", function() {
 // document.getElementById('loading').style.display = 'none';
  angular.bootstrap(document, ['tell']);
}, false);
