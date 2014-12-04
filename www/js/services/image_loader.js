'use strict';

angular.module('tell.services').service('imageLoader', function($timeout, $rootScope) {
  this.preload = function(element, imageToLoad, temporaryImage){
    var url = element[imageToLoad];
    element[imageToLoad] = null;
    if(url){
      $("<img />").attr('src', url).load(function(){
        $rootScope.$apply(function(){
          element[imageToLoad] = url;
        });
      });
    } else {
      element[imageToLoad] = temporaryImage;
    }
  };
});