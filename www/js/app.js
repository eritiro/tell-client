'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com'
};

var POMELO = {
  serverUrl: 'http://127.0.0.1:3000'
};

var config = POMELO;

angular.module('tell.directives', ['ui.bootstrap']);
angular.module('tell.services', []);
angular.module('tell.resources', ['ngResource', 'tell.services']);
angular.module('tell.controllers', ['Devise', 'tell.resources', 'tell.services']);

angular.module('tell', [
  'ngRoute',
  'tell.controllers',
  'tell.services',
  'tell.resources',
  'tell.directives'
])
.config(function(AuthProvider, $httpProvider, $routeProvider){
  AuthProvider.loginPath(config.serverUrl + '/users/sign_in');
  AuthProvider.logoutPath(config.serverUrl + '/users/sign_out');
  AuthProvider.registerPath(config.serverUrl + '/users');
  AuthProvider.ignoreAuth(true);

  $httpProvider.defaults.headers.common.Accept = 'application/json';

  $routeProvider.when('/', { template: '<div></div>', controller: 'StartController' });

  $routeProvider.when('/users/sign_up_selection', {templateUrl: 'partials/users/sign_up_selection.html', controller: 'UsersController'});
  $routeProvider.when('/users/email_sign_in', {templateUrl: 'partials/users/email_sign_in.html', controller: 'UsersController'});
  $routeProvider.when('/users/email_sign_up', {templateUrl: 'partials/users/email_sign_up.html', controller: 'UsersController'});
  $routeProvider.when('/users/username', {templateUrl: 'partials/users/username.html', controller: 'UsersController'});

  $routeProvider.when('/users/:id', {templateUrl: 'partials/users/user.html', controller: 'SocialController'});

  $routeProvider.when('/users/:id/chat', {templateUrl: 'partials/users/chat.html', controller: 'ChatController'});

  $routeProvider.when('/locations', {templateUrl: 'partials/locations/find.html', controller: 'LocationsFindController'});
  $routeProvider.when('/locations/:id/attend', {templateUrl: 'partials/locations/attend.html', controller: 'LocationsAttendController'});
  $routeProvider.when('/locations/:id/show', {templateUrl: 'partials/locations/show.html', controller: 'LocationsShowController'});

  $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeController'});
  $routeProvider.when('/locations/:locationId/comments/new', { templateUrl: 'partials/comment.html', controller: 'CommentsController' });
});

// Angular bootstrap
document.addEventListener("deviceready", function() {
 try {
   window.plugins.pushNotification.register(
    function(result){
      console.log("pushNotification success. result = " + result);
      angular.bootstrap(document, ['tell']);
    },
    function(error) {
      console.log("pushNotification error. result = " + error);
    },
    {
        "senderID":"528578293155",
        "ecb":"onNotification"
    });
 } catch (error) {
   console.log(error);
 }
}, false);
