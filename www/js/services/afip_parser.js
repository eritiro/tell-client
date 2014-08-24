angular.module('tell.services').service('afipParser', function() {
  var that = this;
  
  this._getParameterByName = function(url, name) { // TODO parsead el otro formato
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  };
  
  this.parse = function(url, callback) {
    var parsed = that._getParameterByName(url, "req");
    callback({ success: !!parsed, req: parsed });
  }
});

