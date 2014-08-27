angular.module('tell.services').service('formHelper', function() {
  var that = this;
  this.model = {}

  this.showErrors = function(response){
    that.model.errors = [];
    var errors = response.data.errors;
    for(var key in errors) {
      name = $("label[for=" + key + "]").text();
      that.model.errors.push(name + " " + errors[key][0]);
    }
  }
});

