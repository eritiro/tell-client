'use strict';

angular.module('tell.services').service('menuButtonService', function($location, $window) {
  var that = this;
  var menuOpen = false;
  
  this.openMenu = function() {
    document.getElementById("sidebar").style.display = "";
  };
  
  this.closeMenu = function() {
    document.getElementById("sidebar").style.display = "none";
  };

  this.handleMenuButton = function() {
    if (!menuOpen) {
      menuOpen = true;
      that.openMenu();
    } else {
      menuOpen = false;
      that.closeMenu();
    }
  };

  this.attach = function(){
    document.addEventListener("menubutton", that.handleMenuButton, false);
  };

  this.detach = function(){
    document.removeEventListener("menubutton", that.handleMenuButton, false);
  };

})
.run(function(menuButtonService) {
  menuButtonService.attach();
});