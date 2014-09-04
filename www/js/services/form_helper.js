angular.module('tell.services').service('formHelper', function() {
  this.Model = function(){
    that = this;
    this.showErrors = function(response){
      that.errors = [];
      var errors = response.data.errors;
      for(var key in errors) {
        name = $("label[for=" + key + "]").text();
        that.errors.push((!name ? key : name) + " " + errors[key][0]);
      }
    }
  }
});

