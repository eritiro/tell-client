'use strict';

angular.module('tell.services').service('formHelper', function() {
  this.Model = function(){
    var that = this;
    this.showErrors = function(response){
      that.errors = [];
      var errors = response.data.errors;
      var key;
      for(key in errors) {
        var name = $("label[for=" + key + "]").text();
        that.errors.push((!name ? key : name) + " " + errors[key][0]);
      }
    };
  };
});

