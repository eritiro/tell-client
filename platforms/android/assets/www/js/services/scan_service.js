// Wrapper del plugin barcodescanner de cordova
angular.module('tell.services').service('scanService', function() {

  this.scan = function(s, f) {
    cordova.plugins.barcodeScanner.scan(s, f);
  }
});

