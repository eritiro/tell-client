'use strict';

angular.module('tell.services').service('imageLoader', function($timeout, $rootScope) {
  this.preload = function(element, imageToLoad, temporaryImage){
    var url = element[imageToLoad];
    element[imageToLoad] = temporaryImage;
    if(url){
      $timeout(function(){
        $("<img />").attr('src', url).load(function(){
          $rootScope.$apply(function(){
            element[imageToLoad] = url;
          });
        });
      });
    }
  };
});