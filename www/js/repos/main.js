(function() {
  'use strict';
  
  var repo = angular.module('tell.repos', []);
  
  repo.provider('Repository', function() {
    this.key = 'tell.user.data';
    
    this.$get = ['$window', function($window) {
      var key = this.key;
      
      return {
        storeData: function(userData) {
          localStorage.setItem(this.key, angular.toJson(userData));
        },
        getData: function() {
          return angular.fromJson(localStorage.getItem(this.key));
        }
      };
    }];
    
  });
}).call(this);
