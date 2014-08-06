angular.module('tell.services')
  .service('userStorageService', function(){
    this.key = 'tell.user.data';

    this.storeData = function(userData) {
      localStorage.setItem(this.key, angular.toJson(userData));
    };

    this.getData = function() {
      return angular.fromJson(localStorage.getItem(this.key));
    };
  }
);