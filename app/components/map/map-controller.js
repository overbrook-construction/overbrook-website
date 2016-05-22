'use strict';

const angular = require('angular');

angular.module('MapModule', [])
  .controller('MapController', ['$http', '$location', function($http, $location) {

    var mockHouseArray = [];
    this.realMockArray = mockHouseArray;

    this.viewChangeToGallery = function() {
      $location.path('/gallery');
    }

    var geotags = [];
    var markerData = [];

    this.completedHomes = './data/homes.json';
    this.underConstruction = './data/homesTwo.json';

    this.getData = function(route) {

      markerData = [];
      geotags = [];

      $http.get(route)
      .then(function successCallback(response) {
        markerData = response.data
          for (var i = 0; i <markerData.length; i++){
            mockHouseArray.push(markerData[i].address)
          }
        function geocode() {
          for (var i = 0; i < markerData.length; i++){
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({'address': markerData[i].address}, function(results, status) {
              results.forEach(function(obj){
                geotags.push(obj.geometry.location);
              })
            })
          }
        }

        function initMap() {
          function map() {
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
            center: {lat: 47.629, lng: -122.211},
            zoom: 12
          });
          for (var j = 0; j < geotags.length; j++){
            var marker = new google.maps.Marker({
              map: map,
              position: geotags[j]
            });
            var infowindow = new google.maps.InfoWindow({
              content: '<p>Marker Location:' + marker.getPosition() + '</p>'
            });
          }
        }
        setTimeout(map, 500)
      }
        geocode();
        initMap();
      }, function errorCallback(response) {
      })
    }
  }])
