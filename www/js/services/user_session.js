'use strict';

angular.module('tell.services')
  .service('userSession', function($http, $cacheFactory, User){
    var key = 'user.data.v.0';
    var user;

    function setHeaders(){
      $http.defaults.headers.common['User-Id'] = user.id;
      $http.defaults.headers.common['User-Token'] = user.authentication_token;
    }

    function removeHeaders(){
      delete $http.defaults.headers.common['User-Id'];
      delete $http.defaults.headers.common['User-Token'];
    }

    this.save = function(){
      localStorage.setItem(key, angular.toJson(user));
      setHeaders();
    };

    this.storeUser = function(newUser) {
      user = newUser;
      this.save();
    };

    this.logout = function() {
      localStorage.removeItem(key);
      user = null;
      removeHeaders();
      $cacheFactory.get('$http').removeAll();
    };

    this.currentUser = function(){
      return user;
    };

    this.load = function(){
      user = angular.fromJson(localStorage.getItem(key));
      if(user){
        setHeaders();
        User.profile({}, function(userData) {
          user.unread_notifications = userData.unread_notifications;
          user.location = userData.location;
          user = userData;
        });
      }
    };
  })
  .run(function(userSession){
    userSession.load();
  });