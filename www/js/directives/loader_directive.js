"use strict";

angular.module('tell.directives')
.directive("loader", function ($rootScope) {
    return function ($scope, element, attrs) {
        $scope.$on("loader_show", function () {
            $scope.ready = false;
            return element.show();
        });
        return $scope.$on("loader_hide", function () {
            $scope.ready = true;
            return element.hide();
        });
    };
});