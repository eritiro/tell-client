'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location) {

  $scope.feeds = [
		{ link: "/notifications", content: "<div>texto texto texto</div>" },
		{ link: "/users/13/chat", content: "<div>texto texto texto 2</div>" }
	];
	
	$scope.resolve = function(feed) {
		if (feed.link) {
			$location.path(feed.link);
		}
	}

});
