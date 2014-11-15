'use strict';

angular.module('tell.controllers').controller('SocialController', function($scope, $location, User, $routeParams) {

	var user;
	User.get({ id: $routeParams.id }, function(u){
		user = u;
		$scope.user = user;
	});
	
  $scope.invite = function() {
		user.$invite({ id: $scope.user.id });
    $scope.user.invited = true;
  };

  $scope.chat = function() {
    $location.path('/users/' + $scope.user.id + '/chat');
  };
});
