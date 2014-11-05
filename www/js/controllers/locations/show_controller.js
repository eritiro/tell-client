'use strict';

angular.module('tell.controllers')
  .controller('LocationsShowController', function($scope, $routeParams, Location, historyService) {

    var pagesConfig = { perPage: 9, maxPages: 10 };

    var paginate = function(items, pagesConfig) {
      if (!items) return [];
      
      var pages = Math.min(Math.ceil(items.length / pagesConfig.perPage), pagesConfig.maxPages);
      var result = [];

      for (var i = 0; i < pages; i++) {
        var start = i * pagesConfig.perPage;
        var page = { active:false, items: items.slice(start, start + pagesConfig.perPage) };
        result.push(page);
      }

      return result;
    }

    Location.get({ id: $routeParams.id }, function(location) {
      $scope.location = location;
      var items = location.attending;
      $scope.pages = paginate(items, pagesConfig);
      historyService.log(location);
    });

    $scope.score = 0;
  });
