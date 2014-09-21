'use strict';

angular.module('tell.services').service('backButtonService', function($location, $window) {
  var that = this;

  this.cancel = function() {
    alert('Lectura cancelada');
  };

  this.onBack = function() {
    var currentPath = $location.path();
    var noReturn = ['/', '/home', '/users/sign_up_selection', '/tutorial/1'];
    if (noReturn.indexOf(currentPath) !== -1) {
      navigator.app.exitApp();
    } else {
      $window.history.back();
    }
  };

  this.attach = function(){
    document.addEventListener("backbutton", that.onBack, false);
  };

  this.detach = function(){
    document.removeEventListener("backbutton", that.onBack, false);
  };

})
.run(function(backButtonService) {
  backButtonService.attach();
});