'use strict';

angular.module('tell.resources').factory('Location', function($resource, $cacheFactory){

    var Location = {};

    Location.find = function (data, success, error) {
      var locations = [
        {
            "id": 1,
            "name": "MAGARIÑOS SUSANA Y OLANO MARCELA SH",
            "address": "AV LOS QUILMES 707 BERNAL (C.P. 1876) BUENOS AIRES",
            "phone": "",
            "url": "http://tell.startmeapps.com/locations/1.json"
        },
        {
            "id": 2,
            "name": "LA AMERICANA 1935 S R L",
            "address": "CALLAO AV. 83 PISO PB CAPITAL FEDERAL (C.P. 1022) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": "",
            "url": "http://tell.startmeapps.com/locations/2.json"
        },
        {
            "id": 3,
            "name": "PRODUCTOS INITIO S.R.L.",
            "address": "CORRIENTES 413 PISO 0 BARRIO PARQUE BARON (C.P. 1832) BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/3.json"
        },
        {
            "id": 4,
            "name": "HOTTON SA",
            "address": "DEFENSA 383 PISO - DEPTO - CAPITAL FEDERAL (C.P. 1065) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/4.json"
        },
        {
            "id": 5,
            "name": "La Buena Cocina",
            "address": "CRAMER AV. 3702 CAPITAL FEDERAL (C.P. 1429) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": "4703-1104",
            "url": "http://tell.startmeapps.com/locations/5.json"
        },
        {
            "id": 6,
            "name": "NAVIJET S.A.",
            "address": "ESMERALDA 684 PISO 7 CAPITAL FEDERAL (C.P. 1007) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/6.json"
        },
        {
            "id": 7,
            "name": "CANUDAS LEDA ALICIA",
            "address": "PERU 1017 CAPITAL FEDERAL (C.P. 1068) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/7.json"
        },
        {
            "id": 8,
            "name": "SONY ARGENTINA SA",
            "address": "VEDIA 3626 (C.P. 1430) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/8.json"
        },
        {
            "id": 9,
            "name": "VILLASANA MARIA DEL CARMEN",
            "address": "PIEDRAS 1084 PISO PB CAPITAL FEDERAL (C.P. 1070) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/9.json"
        },
        {
            "id": 10,
            "name": "GARCIA ALONSO OSCAR",
            "address": "PIEDRAS 1120 CAPITAL FEDERAL (C.P. 1070) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/10.json"
        },
        {
            "id": 11,
            "name": "MARIÃO JUAN CARLOS",
            "address": "PIEDRAS 1171 CAPITAL FEDERAL (C.P. 1070) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/11.json"
        },
        {
            "id": 12,
            "name": "SAV SA",
            "address": "SANTA FE AV. 3251 PISO 0 DEPTO 1051 (C.P. 1425) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/12.json"
        },
        {
            "id": 13,
            "name": "DE LAJONQUIERE MARIA CRISTINA",
            "address": "CALVO CARLOS 614 CAPITAL FEDERAL (C.P. 1102) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/13.json"
        },
        {
            "id": 14,
            "name": "JUMBO RETAIL ARGENTINA SOCIEDAD ANONIMA",
            "address": "BALCARCE 897 GODOY CRUZ (C.P. 5501) MENDOZA",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/14.json"
        },
        {
            "id": 15,
            "name": "ANAM CARA SA",
            "address": "JURAMENTO 1905 CAPITAL FEDERAL (C.P. 1428) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/15.json"
        },
        {
            "id": 16,
            "name": "SUAREZ ELIZABETH DE LAS MERCEDES",
            "address": "URQUIZA 144 COLONIA CERRITO (C.P. 3122) ENTRE RIOS",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/16.json"
        },
        {
            "id": 17,
            "name": "CALLAO 62 SRL",
            "address": "CALLAO AV. 62 CAPITAL FEDERAL (C.P. 1022) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/17.json"
        },
        {
            "id": 18,
            "name": "MORAL RAFAEL VICTOR",
            "address": "ALEM 41 MENDOZA (C.P. 5500) MENDOZA",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/18.json"
        },
        {
            "id": 19,
            "name": "STARBUCKS COFFEE ARGENTINA SRL",
            "address": "FLORIDA 1 (C.P. 1005) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/19.json"
        },
        {
            "id": 20,
            "name": "SISTO JUAN CARLOS",
            "address": "PREDIO EX-ESTACION BELGRANO-BVD GALVEZ 1150 PISO 0 DEPTO 0 SANTA FE (C.P. 3000) SANTA FE",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/20.json"
        },
        {
            "id": 21,
            "name": "STARBUCKS COFFEE ARGENTINA SRL",
            "address": "CALLAO AV. 98 (C.P. 1022) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/21.json"
        },
        {
            "id": 22,
            "name": "FARMCITY SA",
            "address": "FLORIDA 52 (C.P. 1005) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/22.json"
        },
        {
            "id": 23,
            "name": "SUEIRO PROPIEDADES & ASOCIADOS S.R.L.",
            "address": "NEUQUEN 532 CAPITAL FEDERAL (C.P. 1405) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/23.json"
        },
        {
            "id": 24,
            "name": "YU XI",
            "address": "CHACABUCO 92 PISO PB DEPTO - (C.P. 1069) CIUDAD AUTONOMA BUENOS AIRES",
            "phone": null,
            "url": "http://tell.startmeapps.com/locations/24.json"
        }
      ];

      success(locations);
    };

    Location.get = function(data, success, error) {
      success({
          "id": 1,
          "name": "El Álamo",
          "address": "AV LOS QUILMES 707 BERNAL (C.P. 1876) BUENOS AIRES",
          "phone": "",
          "score": "1.0",
          "photo_url": "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xaf1/v/t1.0-9/226147_112219448861665_6342498_n.jpg?oh=e8ea8a6d632a445b60758de75cc1d3a8&oe=54ED7C0F&__gda__=1425570344_0e87bb3ce77ba7527170cf0d815243d7",
          "comments": [
              {
                  "text": "No me gustó",
                  "score": "1.0",
                  "created_at": 1410478732,
                  "author": {
                      "id": 5,
                      "username": "Diego Cero Sisto",
                      "picture": "/images/user_missing_thumb.png"
                  }
              }
          ],
          "attending": [
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c7.0.50.50/p50x50/1794743_10152366777611934_283978981_n.jpg?oh=ed4776ed322535717f51882c5e1d7696&oe=54D824A5&__gda__=1425338412_056bd8e473076a187a7fb8a9cc0cc42a" },
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c108.41.508.508/s50x50/3449_10151482954196543_801175497_n.jpg?oh=c15a10456fda142cef830b0b003e2727&oe=54DE7477&__gda__=1425294566_f56833db961e964b9291f2fdbd2261ba" },
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c8.0.50.50/p50x50/10635967_10203955260615764_1188128965634461297_n.jpg?oh=cb3339f55b67ee9f96bbe7717ccd9686&oe=54EC1923&__gda__=1425090863_8c39a13ba7b6aebe55998316d736d572" },
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c0.5.50.50/p50x50/427689_3198533559439_300299200_n.jpg?oh=14b56f594214ff84a889b264cdf7c544&oe=54DD2937&__gda__=1423709587_46949950a9dee1b4c9811a5c4d7627a2" },
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c0.8.50.50/p50x50/1234903_10201719162719041_1298139233_n.jpg?oh=533cab020ee75d2fd3d6fcb0f4ebf28c&oe=54D7363E&__gda__=1423995364_841c6655880ea687b91af54d028da074" },
            { name: "", url: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c12.0.50.50/p50x50/994929_10201857064295527_177603821_n.jpg?oh=450851d77835a491bf11b359a548fc74&oe=54ED2A21&__gda__=1423514055_702893edfcdecebbcfaf5bdab781c7a1" },
            { name: "", url: "http://i.imgur.com/NWVNQoO.jpg" }
          ]
      });
    };

    Location.attend = function(success, error) {
      success();
    };

    return Location;
  });
