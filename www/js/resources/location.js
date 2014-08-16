'use strict';

angular.module('tell.resources')
  .factory('Location', function($resource, $cacheFactory){
    var Location = $resource(config.serverUrl +'/locations/:id?:query:req',
      { }, {
        get: {
          cache: true,
          method: 'GET'
        },
        getByAfipReqPrivate: {
          method: 'GET',
          params: {
            query: '&req='
          }
        }
    });
    // Wraps getByAfipReq function to update the cache by id:
    Location.getByAfipReq = function(hash, result){
      this.getByAfipReqPrivate(hash, function(location){
        $cacheFactory.get('$http').put(config.serverUrl + "/locations/" + location.id, location);
        result(location);
      });
    };
    return Location;
  });
