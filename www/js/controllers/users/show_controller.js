'use strict';

angular.module('tell.controllers').controller('UsersShowController', function($scope, $location, User, $routeParams, userSession, $window, dialog, backButtonService) {

	var user;
	User.get({ id: $routeParams.id }, function(u){
      user = u;
      $scope.user = user;
      if(user.id === userSession.currentUser().id){
        $scope.itsYou = true;
        $scope.where = "Esta noche vas a";
      } else if(user.gender === "male"){
        $scope.where = "Encontralo en";
      } else if(user.gender === "female"){
        $scope.where = "Encontrala en";
      } else{
        $scope.where = "Esta noche en";
      }
      $location.search("username", user.username);
	});

  $scope.invite = function() {
    dialog.confirm("¿Querés invitarle un trago a "+ $scope.user.username + "?", function(result){
      user.$invite({ id: $scope.user.id });
      $scope.user.was_invited = true;
    });
  };

  $scope.chat = function() {
    $location.path('/users/' + $scope.user.id + '/chat');
  };


  $scope.back = function(){
    backButtonService.back();
  };
});
