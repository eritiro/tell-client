angular.module('tell.services').service('facebookService', function() {

  var permissions = ["public_profile", "email"];
  
  this.login = function(s, f) {
    try {
      facebookConnectPlugin.login(
        permissions, 
        function(data) {
          document.querySelector("#debug").innerHTML = "Login con FB!!! " + JSON.stringify(data);
          s(data.authrensponse);
        }, function(data){
          document.querySelector("#debug").innerHTML = "Falló login FB " + JSON.stringify(data);
          f(data);
        });
    } catch (e) {
      document.querySelector("#debug").innerHTML = "Error> " + e;
      f(data);
    }
  }
});
