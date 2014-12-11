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

  $scope.deleteNotification = function(notification){
    var translated_type;
    if (notification.type === 'invite') {
      translated_type = 'notificación';
    } else {
      translated_type = 'charla';
    }
    dialog.confirm("¿Querés borrar la " + translated_type + "?", function(result){
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
