var cordova = cordova || {
	plugins: {
		barcodeScanner: {
			scan: function (success, error) {
				success({ text: 'urlafip' });
			}
		}
	}
}


document.onreadystatechange = function (){
  var event;
  event = document.createEvent("HTMLEvents");
  event.initEvent("deviceready", true, true);
  event.eventName = "deviceready";
  document.dispatchEvent(event);
}