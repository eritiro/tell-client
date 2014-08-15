'use strict';

angular.module('tell.resources')
  .factory('Location', function($resource, userStorageService, $cacheFactory){
    var userData = userStorageService.getData();
    var Location = $resource(config.serverUrl +'/locations/:id.json?username=:username:query:req',
      { username: userData.username }, {
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
        $cacheFactory.get('$http').put(config.serverUrl + "/locations/" + location.id + ".json?username=" + userData.username, location);
        result(location);
      });
    };
    return Location;
  });
