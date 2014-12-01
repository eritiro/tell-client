'use strict';

angular.module('tell.services').service('backButtonService', function($location, $window) {
  var that = this;

  this.cancel = function() {
    alert('Lectura cancelada');
  };

  this.onBack = function() {
    if (!$('#sidebar').is(':hidden')) {
      $('#sidebar').hide();
      return;
    }

    var currentPath = $location.path();
    var noReturn = ['/', '/users/sign_up_selection'];
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