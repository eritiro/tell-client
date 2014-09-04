'use strict';

angular.module('tell.resources')
  .factory('User', function($resource){
    return $resource(
      config.serverUrl +'/users/:action',
      { },
      {
        update: {
          method: 'PUT'
        },
        facebook: {
          method: 'PUT',
          params: { action: 'facebook' }
        }
      });
  });
