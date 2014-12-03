'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location, $sce) {
  var i;
  $scope.feeds = [];
  for (i = 0; i < 10; i++) {
    $scope.feeds.push({ link: "/users/13/chat", content: $sce.trustAsHtml("<div>texto texto texto " + i + "</div>") });
  }
  
  var complex = '<ul style="background-color:red;"><li><b>Ahora</b></li><li><i>renderizo</i></li><li style="background-color:green;">el HTML</li></ul>';
  $scope.feeds.push({ link: "/notifications", content: $sce.trustAsHtml(complex) });

  $scope.resolve = function(feed) {
    if (feed.link) {
      $location.path(feed.link);
    }
  };

  $scope.swipeLeft = function(){
    $location.path("/locations/attendees");
  };
});
