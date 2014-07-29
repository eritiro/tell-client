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
  if (document.readyState == 'complete') {
    var event;
    event = document.createEvent("HTMLEvents");
    event.initEvent("deviceready", false, true);
    event.eventName = "deviceready";
    document.dispatchEvent(event);
  }
}