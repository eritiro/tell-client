'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com'
};

var POMELO = {
  serverUrl: 'http://192.168.1.104:3000'
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
  $routeProvider.when('/', { template: '<div></div>', controller: 'StartController' });

  $routeProvider.when('/users/sign_up_selection', {templateUrl: 'partials/users/sign_up_selection.html', controller: 'UsersController'});
  $routeProvider.when('/users/email_sign_in', {templateUrl: 'partials/users/email_sign_in.html', controller: 'UsersController'});
  $routeProvider.when('/users/email_sign_up', {templateUrl: 'partials/users/email_sign_up.html', controller: 'UsersController'});
  $routeProvider.when('/users/username', {templateUrl: 'partials/users/username.html', controller: 'UsersController'});

  $routeProvider.when('/locations/history', {templateUrl: 'partials/locations/history.html', controller: 'LocationsHistoryController'});
  $routeProvider.when('/locations/:id', {templateUrl: 'partials/locations/show.html', controller: 'LocationsShowController'});

  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/locations/:locationId/comments/new', { templateUrl: 'partials/comment.html', controller: 'CommentsController' });
})
.config(function(AuthProvider){
  AuthProvider.loginPath(config.serverUrl + '/users/sign_in');
  AuthProvider.logoutPath(config.serverUrl + '/users/sign_out');
  AuthProvider.registerPath(config.serverUrl + '/users');
  AuthProvider.ignoreAuth(true);
})
.directive("loader", function ($rootScope) {
    return function ($scope, element, attrs) {
        $scope.$on("loader_show", function () {
            $scope.ready = false;
            return element.show();
        });
        return $scope.$on("loader_hide", function () {
            $scope.ready = true;
            return element.hide();
        });
    };
})
.config(function($httpProvider){
  $httpProvider.defaults.headers.common['Accept'] = 'application/json';
});

// Angular bootstrap
document.addEventListener("deviceready", function() {
 try {
   angular.bootstrap(document, ['tell']);
 } catch (error) {
   console.log(error);
 }
}, false);
