'use strict';

angular.module('tell.services')
  .service('userSession', function($http, $cacheFactory){
    var key = 'warmapp.user.data';
    this.storeUser = function(user) {
      localStorage.setItem(key, angular.toJson({
        id: user.id,
        authentication_token: user.authentication_token,
        completed_tutorial: user.completed_tutorial}));

      $http.defaults.headers.common['User-Id'] = user.id;
      $http.defaults.headers.common['User-Token'] = user.authentication_token;
    };

    this.logout = function() {
      localStorage.removeItem(key);
      delete $http.defaults.headers.common['User-Id'];
      delete $http.defaults.headers.common['User-Token'];
      $cacheFactory.get('$http').removeAll();
    };

    this.currentUser = function(){
      return angular.fromJson(localStorage.getItem(key));
    };

  })
  .run(function(userSession, $http){
    var currentUser = userSession.currentUser();
    if(currentUser){
      $http.defaults.headers.common['User-Id'] = currentUser.id;
      $http.defaults.headers.common['User-Token'] = currentUser.authentication_token;
    }
  });