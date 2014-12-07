'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location, $sce, userSession) {

  $scope.user = userSession.currentUser();

  $scope.feeds = [];
  //$scope.feeds.push({ link: "/users/13/chat", content: $sce.trustAsHtml("texto texto texto") });

  $scope.resolve = function(feed) {
    if (feed.link) {
      $location.path(feed.link);
    }
  };

  $scope.find = function(){
    $location.path("/locations/");
  };

  $scope.swipeLeft = function(){
    $location.path("/locations/attendees");
  };
});
