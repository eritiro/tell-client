var registrationId;

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

      console.log("push_handler - received message - foreground: " +  e.foreground + ". coldstart: " + e.coldstart + ". payload: " + JSON.stringify(e.payload));

      // if this flag is set, this notification happened while we were in the foreground.
      // you might want to play a sound to get the user's attention, throw up a dialog, etc.
      if ( e.foreground )
      {
        // todo
        window.plugin.notification.local.add({
          id:         e.payload.id,  // A unique id of the notifiction
          message:    e.payload.message,  // The message that is displayed
          title:      e.payload.title,  // The title of the message
          json:       JSON.stringify({ from_id: e.payload.from_id, type: e.payload.type })
        }, function(){}, "scope");

        var injector = angular.element(document.body).injector();
        injector.invoke(function($rootScope, userSession) {
          $rootScope.$apply(function(){
            userSession.setUnreadNotifications(e.payload.unread);
            $rootScope.notificationsCount = e.payload.unread;
          });
        });

        window.plugin.notification.local.onclick = function (id, state, json) {
          console.log("push_handler - local notification onclick");
          var data = JSON.parse(json);
          if(data.type === "invite"){
            window.location = "#/users/" + data.from_id;
          } else {
            window.location = "#/users/" + data.from_id + "/chat";
          }
        };
      }
      else
      {  // otherwise we were launched because the user touched a notification in the notification tray.

          if ( e.coldstart )
          {
             window.plugin.notification.local.add({
              id:         e.payload.id,  // A unique id of the notifiction
              message:    e.payload.message,  // The message that is displayed
              title:      e.payload.title  // The title of the message
            }, function(){}, "scope");
          }
          else {
            if(e.payload.type === "invite"){
              window.location = "#/users/" + e.payload.from_id;
            } else {
              window.location = "#/users/" + e.payload.from_id + "/chat";
            }
          }
      }
      break;

    case 'error':
       console.log("push_handler - ERROR: " +  e.msg);
    break;

    default:
      console.log("push_handler - UNKNOWN: " +  e.event);
    break;
}
}