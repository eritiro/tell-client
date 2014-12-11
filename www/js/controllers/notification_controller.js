'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $rootScope, $routeParams, $location, Notification, userSession, dialog) {

  $scope.user = userSession.currentUser();

  $scope.go = function(notification) {
    if(!notification.read) {
      $scope.user.unread_notifications--;
      notification.read = true;
      userSession.save();
    }
    $location.search("backto", "/notifications");
    if (notification.type === 'invite') {
      $location.path("/users/" + notification.from.id);
    } else {
      $location.path("/users/" + notification.from.id + "/chat");
    }
  };

  $scope.delete = function(notification){
    dialog.confirm("¿Querés borrar la notificación?", function(result){
      Notification.delete({ id: notification.id });
      var notifications = $scope.user.notifications;
      var index = notifications.indexOf(notification);
      notifications.splice(index, 1);
      $scope.user.notifications = notifications;
      $scope.user.pepe = 17;
      userSession.save();
    });
  };

  $scope.swipeRight = function(){
    $location.path("/locations/attendees");
  };
});
