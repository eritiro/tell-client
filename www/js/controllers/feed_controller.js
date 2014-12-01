'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location) {
  var i;
  $scope.feeds = [];
  for (i = 0; i < 100; i++) {
    $scope.feeds.push({ link: "/users/13/chat", content: "<div>texto texto texto " + i + "</div>" });
  }

  $scope.resolve = function(feed) {
    if (feed.link) {
      $location.path(feed.link);
    }
  };

  $scope.swipeLeft = function(){
    $location.path("/locations/attendees");
  };
});
