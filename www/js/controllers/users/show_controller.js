'use strict';

angular.module('tell.controllers').controller('UsersShowController', function($scope, $location, User, $routeParams, userSession) {

    $scope.currentUser = userSession.currentUser();
	var user;
	User.get({ id: $routeParams.id }, function(u){
		user = u;
		$scope.user = user;
	});

  $scope.invite = function() {
	user.$invite({ id: $scope.user.id });
    $scope.user.was_invited = true;
  };

  $scope.chat = function() {
    $location.path('/users/' + $scope.user.id + '/chat');
  };
});
