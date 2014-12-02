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
		    success({ authResponse: { userId: '10152363454658285', accessToken: "CAACEdEose0cBAJiP7yKx9H8Fv3vWfKuPONiZC99v2a46zxKwF6SwpErI9CI02lYsQT4Y3PrfQSjUlRI7ogZBWk9ZBdGVZCTZAAufrnxhicQ5UgThbC6Rkxk9bMqt7jBtnmcXAZBYTJ6PZBIhTHZCVzZCn4mW8ppQQtFKgvkbX4ZAyXZCvAWrX7NBUR5V7fdWoiIqNegyd7PT7pA0m8g2pqQ9ZBTfcctoJ9t5ZBnUZD" } });
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
