'use strict';

angular.module('tell.resources').factory('Message', function($resource){
  return $resource(
    config.serverUrl + '/users/:userId/messages/:messageId',
    { messageId:'@id' },
    { }
  );
});
