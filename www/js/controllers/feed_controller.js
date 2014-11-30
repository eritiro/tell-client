'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location) {

  $scope.feeds = [];	
	for (var i = 0; i < 100; i++) {
		$scope.feeds.push({ link: "/users/13/chat", content: "<div>texto texto texto " + i + "</div>" });
	}
	
	$scope.resolve = function(feed) {
		if (feed.link) {
			$location.path(feed.link);
		}
	}

});
