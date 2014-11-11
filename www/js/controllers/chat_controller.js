'use strict';

angular.module('tell.controllers').controller('ChatController', function($scope, $location) {

  $scope.comments = [
    { userid: 4, text: 'Hola' },
    { userid: 4, text: '¿Todo viento?' },
    { userid: 1, text: 'Tranca, ¿y Boca?' },
    { userid: 4, text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos.' },
    { userid: 4, text: '1' },
    { userid: 1, text: '2' },
    { userid: 4, text: '3' },
    { userid: 1, text: '4' },
    { userid: 4, text: '5' },
    { userid: 1, text: '6' },
    { userid: 4, text: '7' },
    { userid: 1, text: '8' },
    { userid: 4, text: '9' },
    { userid: 1, text: '10' },
    { userid: 4, text: '11' },
    { userid: 1, text: '12' },
    { userid: 4, text: '13' },
    { userid: 1, text: '14' },
    { userid: 4, text: '15' },
    { userid: 1, text: '16' }
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

  $scope.chat = function() {
    if (!$scope.comment) {
      return;
    }

    $scope.comments.push({ userid: $scope.me.id, text: $scope.comment });
    $scope.comment = "";
  };
});
