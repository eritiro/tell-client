'use strict';

var cordova = cordova || {
	plugins: {
		barcodeScanner: {
			scan: function (success, error) {
				setTimeout(function(){
                    success({ text: 'https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVyc29uYT0zMDcxMDA0MDUyMF1bdGlwb2RvbWljaWxpbz0zXVtzZWN1ZW5jaWE9NDZdfQ==' });
                },10);
			}
		},
		facebookConnectPlugin: {
		  login: function(permissions, success, error) {
              setTimeout(function(){
		    success({ authResponse: { userId: '10152363454658285', accessToken: "CAACEdEose0cBACtFSAzmAiA2t5gELUYdona6CEvK7zKu0PZACT9xdQySKnin3ltwWrNPPu3VZAyAqyhABmpanDnnsi0fxWS7HBfHgZBQUoH6D9zcTDd3Q3PzEfkQZBwFdCAGEeBK4PPAlFfWdKnL4W6Q2ySOhPQIpM3aXYDI1gJjZBdd4pZCgo9n6Wi4OjXUK7QRKDamegqUuFmuwirjuH" } });
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
