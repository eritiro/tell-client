'use strict';

angular.module('tell.resources')
  .factory('Comment', function($resource){
    return $resource(
      config.serverUrl +'/locations/:locationId/comments/:id', 
      { locationId:'@locationId', id: '@id' },
      { });
  });
