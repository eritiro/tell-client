'use strict';

angular.module('tell.resources').factory('Location', function($resource, $cacheFactory){

    var Location = $resource(
      config.serverUrl +'/locations/:id/:action',
      { },
      {
        query: {
          cache: true,
          method: 'GET',
          isArray: true
        },
        get: {
          cache: true,
          method: 'GET'
        },
        attend: {
          method: 'PUT',
          params: { action: 'attendees' }
        },
        leave: {
          method: 'DELETE',
          params: { action: 'attendees' }
        },
        attendees: {
          method: 'GET',
          cache: true,
          isArray: true,
          params: { action: 'attendees' }
        }
    });

    Location.find = function (data, success, error) {
      Location.query(data, function(locations) {
        success(locations);
      });
    };

    var wrapped = Location.get;
    Location.get = function(data, success, error) {
      wrapped(data
        , function(location) {
          $cacheFactory.get('$http').put(config.serverUrl + "/locations/" + location.id, location);
          success(location);
        }, error);
    };

    Location.stale = function(id){
      $cacheFactory.get('$http').remove(config.serverUrl + "/locations/" + id);
    };

    Location.staleAttending = function(id){
      $cacheFactory.get('$http').remove(config.serverUrl + "/locations/" + id + '/attendees');
    };

    return Location;
  });
