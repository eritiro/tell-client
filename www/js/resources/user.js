'use strict';

angular.module('tell.resources').factory('User', function($resource){
	return $resource(
		config.serverUrl +'/users/:id/:action',
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
			}
		});
});
