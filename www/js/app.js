'use strict';

var POSTA = {
  serverUrl: 'http://tell.startmeapps.com',
  support: 'info@startmeapps.com'
};

var POMELO = {
  serverUrl: 'http://192.168.0.6:3000',
  support: 'info@startmeapps.com'
};

var config = POSTA;

angular.module('tell.directives', ['ui.bootstrap']);
angular.module('tell.services', []);
angular.module('tell.resources', ['ngResource', 'tell.services']);
angular.module('tell.controllers', ['Devise', 'tell.resources', 'tell.services']);

angular.module('tell', [
  'ngRoute',
  'luegg.directives',
  'tell.controllers',
  'tell.services',
  'tell.resources',
  'tell.directives'
]);

// Angular bootstrap
document.addEventListener("deviceready", function() {
  try {
    window.plugins.pushNotification.register(
      function(result){
        console.log("pushNotification register success. result = " + result);
        console.log("==== bootstraping angular ====");
        angular.bootstrap(document, ['tell']);
      },
      function(error) {
        console.log("pushNotification register error. result = " + error);
      },
      {
          "senderID":"528578293155",
          "ecb":"onNotification"
      });
 } catch (error) {
   console.log(error);
 }
}, false);
