'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com/users/sign_in.json'
};

var POMELO = {
  serverUrl: 'http://192.168.0.6/users/sign_in.json'
};

var config = POSTA;

angular.module('tell.services', []);
angular.module('tell.controllers', ['Devise', 'tell.services']);

angular.module('tell', [
  'ngRoute',
  'tell.controllers',
  'tell.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'Index'});
  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'Home'});
  $routeProvider.when('/scan', {templateUrl: 'partials/scan.html', controller: 'Scan'});
  $routeProvider.when('/register', {templateUrl: 'partials/location.html', controller: 'Scan'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);

// Angular bootstrap
document.addEventListener("deviceready", function() {
  document.getElementById('loading').style.display = 'none';
  angular.bootstrap(document, ['tell']);
}, false);
