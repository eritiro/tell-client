'use strict';

angular.module('tell.services').service('dialog', function($rootScope) {
  this.confirm = function(question, success) {
    $rootScope.$broadcast("confirmation_show", { question: question, success: success});
    // if(window.confirm(question)){
    //   success();
    //  }
  };
});
