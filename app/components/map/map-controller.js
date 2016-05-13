'use strict';

const angular = require('angular');

angular.module('MapModule', [])
  .controller('MapController', ['$http', function($http) {
    var geotags = [];
    var markerData;

    this.getData = function() {
      $http.get('./data/homes.json')
      .then(function successCallback(response) {
        markerData = response.data
      }, function errorCallback(response) {
      });
    }

    this.geocode = function() {
      for (var i = 0; i < markerData.length; i++){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': markerData[i].address}, function(results, status) {
          results.forEach(function(obj){
            geotags.push(obj.geometry.location)
          })
        })
      }
    }
    
    this.initMap = function() {
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
  }])
