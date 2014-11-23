'use strict';

angular.module('tell.services').factory('httpErrorInterceptor', function ($q, $location) {
  return {
    responseError: function (response) {
      if (response.status === 401) {
        $location.path("/users/sign_up_selection");
      }
      return $q.reject(response);
    }
  };
})
.config(function ($httpProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');
});
