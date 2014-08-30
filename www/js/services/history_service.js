// Wrapper del plugin barcodescanner de cordova
angular.module('tell.services').service('historyService', function() {
  var key = 'tell.history';

  function save(list){
    localStorage.setItem(key, angular.toJson(list));
  }

  this.log = function(location) {
    var list = this.get();
    location.when = new Date();
    list = $.grep(list, function(loc){
      return loc.id != location.id;
    });
    list.unshift(location);
    save(list);
  }

  this.get = function(){
    return angular.fromJson(localStorage.getItem(key)) || [];
  }
});

