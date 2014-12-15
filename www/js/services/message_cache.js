'use strict';

angular.module('tell.services')
  .service('messageCache', function($http, $rootScope){
    var key = 'messageCache';
    var that = this;
    var cache = {};
    var user;

    this.get = function(id){
      if(cache[id]){
        return cache[id];
      }
      var messages = angular.fromJson(localStorage.getItem(key + id));
      if(!messages) {
        messages = [];
      }
      cache[id] = messages;
      return messages;
    };

    this.set = function(id, data) {
      cache[id] = data;
      localStorage.setItem(key + id, angular.toJson(data));
      return data;
    };

    $rootScope.$on('notification',function(event, notification){
      if(notification.type === "message") {
        var messages = that.get(notification.from.id);
        messages.push({ text: notification.text, mine: false});
        that.set(notification.from.id, messages);
      }
    });
  });