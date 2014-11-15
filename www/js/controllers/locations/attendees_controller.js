'use strict';

angular.module('tell.controllers')
  .controller('LocationsAttendeesController', function($scope, $routeParams, Location, historyService) {

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
	});

    Location.attendees({ id: $routeParams.id }, function(attendees) {
      $scope.pages = paginate(attendees, pagesConfig);
      historyService.log(location);
    });

    $scope.score = 0;
  });
