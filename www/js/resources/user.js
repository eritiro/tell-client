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
			get: { // TODO hace cache de angular
				cache: true,
				method: 'GET'
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
