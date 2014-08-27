angular.module('tell.services').service('formHelper', function() {
  this.model = {}

  this.showErrors = function(response){
    this.model.errors = [];
    var errors = response.data.errors;
    for(var key in errors) {
      name = $("label[for=" + key + "]").text();
      this.model.errors.push(name + " " + errors[key][0]);
    }
  }
});

