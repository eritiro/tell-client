"use strict";

angular.module('tell.directives')
.directive("dialog", function ($rootScope) {
  return {
    templateUrl: 'partials/dialog.html',
    transclude: true,
    link: function ($scope, element, attrs) {
      var attributes;
      $scope.$on("confirmation_show", function (event, params) {
        attributes = params;
        $scope.question = params.question;
        return element.show();
      });

      $rootScope.dialogAccept = function(){
        element.hide();
        attributes.success();
      };

      $rootScope.dialogCancel = function(){
        element.hide();
      };
    }
  };
});