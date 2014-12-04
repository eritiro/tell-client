'use strict';

angular.module('tell.services').service('backButtonService', function($location, $window, $rootScope, $routeParams) {
  var that = this;

  this.back = function(){
    var currentPath = $location.path();
    var noReturn = ['/', '/users/sign_up_selection', '/feeds'];
    var gotoHome = ['/locations/attendees', '/notifications'];
    if (noReturn.indexOf(currentPath) !== -1) {
      navigator.app.exitApp();
    } else if(gotoHome.indexOf(currentPath) !== -1){
      $location.path('/feeds');
    } else if($routeParams.backto){
      $location.url($routeParams.backto);
    } else {
      $window.history.back();
    }
  };

  this.onBack = function() {
    if (!$('#dialog').is(':hidden')) {
      $('#dialog').parent().hide();
      return;
    }

    if (!$('#sidebar').is(':hidden')) {
      $('#sidebar').hide();
      return;
    }

    $rootScope.$apply(function(){
      that.back();
    });
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