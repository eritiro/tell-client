'use strict';

var cordova = cordova || {
	plugins: {
		barcodeScanner: {
			scan: function (success, error) {
				setTimeout(function(){
                    success({ text: 'https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVyc29uYT0zMDY0MjU0MDUwMV1bdGlwb2RvbWljaWxpbz0xXVtzZWN1ZW5jaWE9MV19' });
                },10);
			}
		},
		facebookConnectPlugin: {
		  login: function(permissions, success, error) {
              setTimeout(function(){
		    success({ authResponse: { userId: '10152363454658285', accessToken: "CAACEdEose0cBADKcn55k4R5xqTnRUCJknJZCx7xmVvThFaZAHtLU6qeZBgdrlKi0SR2GHdU18qe4RRhwQijATPZBJ5T2RTTB6ZBZASMh7KD0SK6oQII7ZAC43gCF9E5JmZAr8sjton5to3TT4asZBi8we7mmn7ZAv5n6ILcGd2paZBlSohumNsiSZBTld62EWbrrBmvpsNzvjCU50WZBZAkGU0wszZC" } });
              },10);
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