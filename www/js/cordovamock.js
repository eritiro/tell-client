var cordova = cordova || {
	plugins: { 
		barcodeScanner: {
			scan: function (success, error) {
				success({ text: 'urlafip' });
			}
		}
	}
}
