'use strict';

angular.module('tell.controllers').controller('NotificationController', function($scope, $routeParams, $location) {

  $scope.notifications = [
    { id: 1, text: 'Hola lindo', user: { id: 1, name: 'Emiliano Ritiro', photo: 'https://scontent-b-mia.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10484497_10202900524248031_6895216917458023588_n.jpg?oh=00374ee34a14234ea44d94679fcfd05f&oe=54F64E12' } },
    { id: 2, text: '¡Qué buena app!', user: { id: 4, name: 'Diego Sisto', photo: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c33.0.200.200/p200x200/208727_10151370585148285_700135972_n.jpg?oh=80af73152beb420e5da753c58bf0d389&oe=54E2B1A0&__gda__=1424262984_40054035d491a1a09793dd8e6970ff2f' } },
    { id: 3, text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500.', user: { id: 4, name: 'Diego Sisto', photo: 'https://scontent-b-mia.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10484497_10202900524248031_6895216917458023588_n.jpg?oh=00374ee34a14234ea44d94679fcfd05f&oe=54F64E12' } }
  ];

  $scope.go = function(id) {
    $location.path("/users/" + id + "/chat");
  };

});
