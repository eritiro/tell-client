'use strict';

var cordova = cordova || {
	plugins: {
		facebookConnectPlugin: {
		  login: function(permissions, success, error) {
              setTimeout(function(){
		    success({ authResponse: { userId: '10152363454658285', accessToken: "CAACEdEose0cBAElTXdh0338xjcopNElYWKc3AZCujBeBW3qvBnEIZBGTn1o5DAl03DwV8ZBdzxc6b1ALy5ZB0CZCHPusy3WEzbtIJKAvz3H7E3ZCYT8g412SQlFRF5I1p0Q7veZBM0Df5L17gZBv1qHP2RkvNcCW76UBmf2ZBmLVZB2zYwXVuZBcoDK4XwUFM0QgnPZAmnPu0BElrrbyAw65q2c7" } });
              },10);
		  }
		},
        pushNotification: {
          register: function(success, failure, info){
            window[info.ecb]({ event: 'registered', regid: 'APA91bFKc_lElcQwFzqvgjkieFTNJSloloKgY5jh6ohHCvCDmGDDp1NdL96s9kZrA39TqCA48qHoa13GuErbt5cXDPMMGsMdiy0cRxbDcaWD26oYk_eY-c--XdNBA78KujkP60U-OGWdpqFsQ3OlgScQsL1RkKLU1Q' });

            success("OK");
          }
        }

	}
};

navigator.notification = {
    alert: function(message, callback, title, button){
      alert(message);
    },
    confirm: function(message, callback, title, button){
      var result = window.confirm(message);
      callback(result ? 1 : 0);
    }
  };

window.plugins = cordova.plugins;
var facebookConnectPlugin = cordova.plugins.facebookConnectPlugin;

if (!navigator.app) {
  navigator.app = {
    exitApp: function() {
      alert("Saliste de la app");
    }
  };
}

document.onreadystatechange = function (){
  if (document.readyState === 'complete') {
    var event;
    event = document.createEvent("HTMLEvents");
    event.initEvent("deviceready", false, true);
    event.eventName = "deviceready";
    document.dispatchEvent(event);
  }
};

document.backbutton = function (){
  var event;
  event = document.createEvent("HTMLEvents");
  event.initEvent("backbutton", false, true);
  event.eventName = "backbutton";
  document.dispatchEvent(event);
};


document.menubutton = function (){
  var event;
  event = document.createEvent("HTMLEvents");
  event.initEvent("menubutton", false, true);
  event.eventName = "menubutton";
  document.dispatchEvent(event);
};
