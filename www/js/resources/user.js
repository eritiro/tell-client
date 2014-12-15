'use strict';

angular.module('tell.resources').factory('User', function($resource){
	return $resource(
		config.serverUrl +'/users/:id/:action/:data',
		{ },
		{
            get:{
              method: 'GET',
              cache: true
            },
			update: {
              method: 'PUT'
			},
			facebook: {
              method: 'PUT',
              url: config.serverUrl +'/users/facebook'
			},
            profile: {
              method: 'GET',
              url: config.serverUrl +'/users/profile',
              cache: true
			},
            invite: {
              method: 'POST',
              params: { action: 'invite' }
			}
		});
});
