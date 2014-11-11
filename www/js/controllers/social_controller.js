'use strict';

angular.module('tell.controllers').controller('SocialController', function($scope, $location) {
  $scope.user = {
    id: 4,
    name: "Emiliano Ritiro",
    photo: "https://scontent-b-mia.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10484497_10202900524248031_6895216917458023588_n.jpg?oh=00374ee34a14234ea44d94679fcfd05f&oe=54F64E12",
    invited: false
  };
  
  $scope.invite = function() {
    $scope.user.invited = true;
  };

  $scope.chat = function() {
    $location.path('/users/' + $scope.user.id + '/chat');
  };
});
