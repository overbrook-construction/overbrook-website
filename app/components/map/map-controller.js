'use strict';

angular.module('MapModule', [])
  .controller('MapController', function() {
    this.initMap = function() {
      var mapDiv = document.getElementById('map');
      // console.log(new google.maps.Map);
      var map = new google.maps.Map(mapDiv, {
        center: {
          lat: 47.629,
          lng: -122.211},
          zoom: 12
      });
    }
  })
  // lat: 47.629,
  // lng: -122.211
