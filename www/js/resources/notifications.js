'use strict';

angular.module('tell.resources').factory('Notification', function($resource){
	return $resource(
		config.serverUrl +'/notifications/:id',
		{ id: '@id' },
		{	});
});
