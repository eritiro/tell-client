'use strict';

angular.module('tell.controllers').controller('SocialController', function($scope, $location, User, $routeParams) {

	User.get({ id: $routeParams.id }, function(user){
		$scope.user = user;
	});
	
  $scope.invite = function() {
    $scope.user.invited = true;
  };

  $scope.chat = function() {
    $location.path('/users/' + $scope.user.id + '/chat');
  };
});
