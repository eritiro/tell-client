angular.module('tell.services').service('backButtonService', function($location, $window) {
  that = this;

  this.cancelled = false;

  this.onBack = function() {
    if(that.cancelled){
      that.cancelled = false;
      return;
    }
    var currentPath = $location.path();
    var noReturn = ['/', '/home', '/users/sign_up_selection'];
    if (noReturn.indexOf(currentPath) != -1) {
      navigator.app.exitApp();
    } else {
      $window.history.back();
    }
  }

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