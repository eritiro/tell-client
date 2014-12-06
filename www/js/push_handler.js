'use strict';

var registrationId;

function broadcastNotification(e){
  var injector = angular.element(document.body).injector();
  injector.invoke(function($rootScope, userSession) {
    $rootScope.$apply(function(){
      var notification = e.payload;
      notification.text = e.payload.message;
      notification.read = false;
      notification.from = {
        id: parseInt(e.payload.from_id, 10),
        username: e.payload.from_username,
        thumb: e.payload.from_thumb
      };
      console.log("push_handler - broadcasting: " + JSON.stringify(notification));
      $rootScope.$broadcast('notification', notification);
      userSession.notify(notification, e.payload.msgcnt);
    });
  });
}

function onPushMessageReceived(e){
  console.log("push_handler - received message: " + JSON.stringify(e));

  window.localStorage.setItem('unreadNotifications', e.payload.msgcnt);

  if (e.foreground) {
    broadcastNotification(e);
    var sound = new Media("/android_asset/www/sounds/notify.mp3");
    sound.play();
    navigator.vibrate(500);
  } else {
    if(!e.coldstart){
      broadcastNotification(e);
    }
    if(e.payload.type === "invite"){
      window.location = "#/users/" + e.payload.from.id + "?backto=" + encodeURIComponent("/feeds");
    } else {
      window.location = "#/users/" + e.payload.from.id + "/chat?backto=" + encodeURIComponent("/feeds");
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