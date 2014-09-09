angular.module('tell.services')
  .service('userSession', function($http){
    this.key = 'tell.user.data';

    this.storeUser = function(user) {
      localStorage.setItem(this.key, angular.toJson({
        id: user.id,
        authentication_token: user.authentication_token}));
      $http.defaults.headers.common['User-Id'] = user.id;
      $http.defaults.headers.common['User-Token'] = user.authentication_token;
    };

    this.logout = function() {
      localStorage.removeItem(this.key);
      delete $http.defaults.headers.common['User-Id'];
      delete $http.defaults.headers.common['User-Token'];
    };
  })
  .provider('currentUser', function(){
    this.$get = function(){ return angular.fromJson(localStorage.getItem('tell.user.data')); }
  })
  .run(function(currentUser, $http){
    if(currentUser){
      $http.defaults.headers.common['User-Id'] = currentUser.id;
      $http.defaults.headers.common['User-Token'] = currentUser.authentication_token;
    };
  });