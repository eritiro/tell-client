'use strict';

var cordova = cordova || {
	plugins: {
		facebookConnectPlugin: {
		  login: function(permissions, success, error) {
              setTimeout(function(){
		    success({ authResponse: { userId: '10152363454658285', accessToken: "CAACEdEose0cBAAhzREzhnhQIBGTzVLkGARW4IJXv85PreY1jQLs9v5yzYYfsGX8YHmenZAfng59bh4lWSyGYWjmB6KfRF5pXkMRHRqyROcSNObzALyW7WBNX4OKGEdt99novDgHZCDp65iIYiZAOsnmWMf4l9ZCyHZB12SGm2woECP3K2oxPOZC8cBnKKokwVMfByO7M1bo8epkm4hUagF" } });
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
