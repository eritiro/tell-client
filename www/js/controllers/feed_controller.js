'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location, $sce, userSession) {

  $scope.user = userSession.currentUser();

  $scope.find = function(){
    $location.search("backto","/feeds");
    $location.path("/locations/");
  };

  $scope.relativeTime = function(dateTime){
    var str = moment(dateTime).fromNow();
    str = str.replace(str.charAt(0), str.charAt(0).toUpperCase());
    return str;
  };

  $scope.swipeLeft = function(){
    $location.path("/locations/attendees");
  };
}).directive('messageFeed', function($location) {
    return {
      restrict: 'A',
      templateUrl: 'message-feed',
      scope: { feed: '=messageFeed' },
      controller: function($scope){
        $scope.go = function(){
          if($scope.feed.action){
            $location.url($scope.feed.action);
            $location.search("backto", '/feeds');
          }
        };
      }
    };
}).directive('usersFeed', function($location) {
    return {
      restrict: 'A',
      templateUrl: 'users-feed',
      scope: { feed: '=usersFeed' },
      controller: function($scope){
        $scope.showUser = function(id){
          $location.search("backto", '/feeds');
          $location.path('/users/' + id);
        };
      }
    };
});

