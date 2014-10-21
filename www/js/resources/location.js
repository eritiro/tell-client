'use strict';

angular.module('tell.resources').factory('Location', function($resource, $cacheFactory){
    
    var Location = $resource(
      config.serverUrl +'/locations/:id/:action',
      { }, 
      {
        get: {
          cache: true,
          method: 'GET'
        },
        scanPrivate: {
          method: 'POST',
          params: { action: 'scan' }
        }
    });
    
    // Wraps scan function to update the cache by id:
    Location.scan = function(hash, result, error){
      this.scanPrivate(hash, function(location){
        $cacheFactory.get('$http').put(config.serverUrl + "/locations/" + location.id, location);
        result(location);
      }, error);
    };
  
    // TODO
    Location.find = function(data, success, error) {
      success([{ id: 1, name: "ink", users: 3 }, { id: 2, name: "The Mo", users: 40 }]);
    };
    
    Location.stale = function(id){
      $cacheFactory.get('$http').remove(config.serverUrl + "/locations/" + id);
    };

    return Location;
  });
