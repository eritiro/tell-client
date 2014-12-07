'use strict';

angular.module('tell.controllers').controller('FeedController', function($scope, $location, $sce, userSession) {

  $scope.user = userSession.currentUser();

  $scope.feeds = [];
  $scope.feeds.push({ type: 'message',
                      title: 'Actualizamos el listado de locales de palermo',
                      action: '/locations/?name=palermo' });
  $scope.feeds.push({ type: 'message',
                     title: 'Esta noche con lista, todos gratis a Club Araoz',
                     detail: 'Hasta las 2am solo con Warmapp',
                     action: '/locations/230'
                    });
  $scope.feeds.push({ type: 'welcome',
                     title: 'Bienvenidos a warmapp!',
                     users: [
{ id:'6', icon: "http://warmapp.startmeapps.com/system/users/pictures/000/000/006/icon/tefy.jpg?1417803650" },
{ icon: "http://warmapp.startmeapps.com/system/users/pictures/000/000/004/icon/208727_10151370585148285_700135972_n.jpg?1417817382" },
{ icon: "http://warmapp.startmeapps.com/system/users/pictures/000/000/009/icon/flopy.jpeg?1417803655" }]});
  $scope.find = function(){
    $location.path("/locations/");
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

