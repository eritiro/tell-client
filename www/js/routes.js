'use strict';

angular.module('tell').config(function(AuthProvider, $httpProvider, $routeProvider){
  AuthProvider.loginPath(config.serverUrl + '/users/sign_in');
  AuthProvider.logoutPath(config.serverUrl + '/users/sign_out');
  AuthProvider.registerPath(config.serverUrl + '/users');
  AuthProvider.ignoreAuth(true);

  $httpProvider.defaults.headers.common.Accept = 'application/json; api_version=' + config.api_version;

  $routeProvider.when('/', { template: '<div></div>', controller: 'StartController' });

  $routeProvider.when('/users/sign_up_selection', {templateUrl: 'partials/users/sign_up_selection.html', controller: 'UsersController'});

  $routeProvider.when('/users/:id', {templateUrl: 'partials/users/show.html', controller: 'UsersShowController'});

  $routeProvider.when('/users/:id/chat', {templateUrl: 'partials/users/chat.html', controller: 'ChatController'});

  $routeProvider.when('/locations', {templateUrl: 'partials/locations/find.html', controller: 'LocationsFindController'});
  $routeProvider.when('/locations/attendees', {templateUrl: 'partials/locations/attendees.html', controller: 'LocationsAttendeesController'});
  $routeProvider.when('/locations/:id', {templateUrl: 'partials/locations/show.html', controller: 'LocationsShowController'});

  $routeProvider.when('/notifications', {templateUrl: 'partials/notifications.html', controller: 'NotificationController'});

	$routeProvider.when('/feeds', {templateUrl: 'partials/feeds.html', controller: 'FeedController'});

  $routeProvider.when('/locations/:locationId/comments/new', { templateUrl: 'partials/comment.html', controller: 'CommentsController' });
}).run(function($http, $templateCache) {
  var templates = [
    'partials/locations/attendees.html',
    'partials/locations/show.html',
    'partials/locations/find.html',
    'partials/notifications.html'];

  angular.forEach(templates, function(templateUrl) {
    $http.get(templateUrl).success(function(data){
      $templateCache.put(templateUrl, data);
    });
  });
});
