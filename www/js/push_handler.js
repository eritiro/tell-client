'use strict';

var registrationId;

function onPushMessageReceived(e){
  console.log("push_handler - received message: " + JSON.stringify(e));

  window.localStorage.setItem('unreadNotifications', e.payload.msgcnt);

  if (e.foreground) {
    var injector = angular.element(document.body).injector();
    injector.invoke(function($rootScope) {
      $rootScope.$apply(function(){
        $rootScope.notificationsCount = e.payload.msgcnt;

        var notification = e.payload;
        notification.text = e.payload.message;
        notification.read = false;
        notification.from_id = parseInt(e.payload.from_id);
        console.log("push_handler - broadcasting: " + JSON.stringify(notification));
        $rootScope.$broadcast('notification', notification);
        var sound = new Media("/android_asset/www/sounds/notify.mp3");
        sound.play();
        navigator.vibrate(500);
      });
    });
  } else {
    if(e.payload.type === "invite"){
      window.location = "#/users/" + e.payload.from_id;
    } else {
      window.location = "#/users/" + e.payload.from_id + "/chat";
    }
  }
}

function onNotification(e) {
  switch( e.event )
  {
  case 'registered':
      if ( e.regid.length > 0 )
      {
          // Your GCM push server needs to know the regID before it can push to this device
          // here is where you might want to send it the regID for later use.
          console.log("push_handler - regID: " + e.regid);
          registrationId = e.regid;
      }
  break;

  case 'message':
      onPushMessageReceived(e);
      break;

    case 'error':
       console.log("push_handler - ERROR: " +  e.msg);
    break;

    default:
      console.log("push_handler - UNKNOWN: " +  e.event);
    break;
  }
}