var cordova = cordova || {
	plugins: {
		barcodeScanner: {
			scan: function (success, error) {
				success({ text: 'https://servicios1.afip.gov.ar/clavefiscal/qr/mobilePublicInfo.aspx?req=e1ttZXRob2Q9Z2V0UHVibGljSW5mb11bcGVyc29uYT0zMDY0MjU0MDUwMV1bdGlwb2RvbWljaWxpbz0xXVtzZWN1ZW5jaWE9MV19' });
			}
		}
	}
}

window.plugins = cordova.plugins;

if (!navigator.app) {
  navigator.app = { 
    exitApp: function() { 
      alert("Saliste de la app"); 
    } 
  }
}

document.onreadystatechange = function (){
  if (document.readyState == 'complete') {
    var event;
    event = document.createEvent("HTMLEvents");
    event.initEvent("deviceready", false, true);
    event.eventName = "deviceready";
    document.dispatchEvent(event);
  }
}
