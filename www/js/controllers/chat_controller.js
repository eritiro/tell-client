'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location) {

  $scope.comments = [
    { userid: 4, text: 'Hola' },
    { userid: 4, text: '¿Todo viento?' },
    { userid: 1, text: 'Tranca, ¿y Boca?' }
  ];

  $scope.me = {
    id: 1,
    name: "Diego Sisto",
    photo: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c11.0.64.64/p64x64/208727_10151370585148285_700135972_n.jpg?oh=006e481aa3fd201d9e749a439f58a895&oe=54E45CCD&__gda__=1424080708_8fe3386d28f635585d4894b6a6617b65"
  };

  $scope.user = {
    id: 4,
    name: "Emiliano Ritiro",
    photo: "https://scontent-b-mia.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10484497_10202900524248031_6895216917458023588_n.jpg?oh=00374ee34a14234ea44d94679fcfd05f&oe=54F64E12"
  };
});
