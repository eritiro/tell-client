'use strict';

angular.module('tell.resources').factory('User', function($resource){
	return $resource(
		config.serverUrl +'/users/:id/:action/:data',
		{ },
		{
			update: {
				method: 'PUT'
			},
			facebook: {
				method: 'PUT',
				url: config.serverUrl +'/users/facebook'
			},
          	profile: {
				method: 'GET',
            	url: config.serverUrl +'/users/profile'
			},
          	invite: {
				method: 'POST',
				params: { action: 'invite' }
			},
			messages: {
				method: 'GET',
				params: { action: 'messages' },
				isArray: true,
				cache: true
			},
			postMessage: {
				method: 'POST',
				params: { action: 'messages' }
			}
		});
});
