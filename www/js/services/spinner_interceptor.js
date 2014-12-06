'use strict';

angular.module('tell.services').factory('spinnerInterceptor', function ($q, $rootScope, $log) {

    var numLoadings = 0;

    function needsSpin(config){
      return config.url.indexOf('users/profile') === -1;
    }

    return {
        request: function (config) {
          if(needsSpin(config)){
            numLoadings++;
            $rootScope.$broadcast("loader_show");
          }
          return config || $q.when(config);
        },
        response: function (response) {
          if(needsSpin(response.config)){
            if ((--numLoadings) === 0) {
              $rootScope.$broadcast("loader_hide");
            }
          }
          return response || $q.when(response);
        },
        responseError: function (response) {
          if(needsSpin(response.config)){
            if (!(--numLoadings)) {
              $rootScope.$broadcast("loader_hide");
            }
          }
          return $q.reject(response);
        }
    };
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('spinnerInterceptor');
});
