'use strict';

angular.module('tell.services')
  .service('userSession', function($http, $cacheFactory, User){
    var key = 'user.data.v.1';
    var that = this;
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
      that.save();
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

    this.notify = function(notification, unread){
      var newList = user.notifications.filter(function(n) { return n.from.id !== notification.from.id || n.type !== notification.type; });
      newList.unshift(notification);
      user.notifications = newList;
      user.unread_notifications = unread;
      that.save();
    };

    this.load = function(){
      user = angular.fromJson(localStorage.getItem(key));
      if(user){
        setHeaders();
        User.profile({}, function(userData) {
          user.location = userData.location;
          user.notifications = userData.notifications;
          user.unread_notifications = userData.unread_notifications;
          user.feeds = userData.feeds;
          user.picture = userData.picture;
          that.save();
        });
      }
    };
  })
  .run(function(userSession){
    userSession.load();
  });