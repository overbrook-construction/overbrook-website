'use strict';

const angular = require('angular');
require(__dirname + '/../gallery/gallery-controller');

require(__dirname + '/../../ajax-service/data-service');

angular.module('MapModule', ['AjaxService'])
  .controller('MapController', ['$http', '$location', 'ajax', '$controller', function($http, $location, ajax, $controller) {

    var vm = this;

    vm.completeIcon = './media/complete-home.svg';
    vm.constructionIcon = './media/construction-home.svg';
    vm.futureIcon = './media/future-home.svg';

    // MAP OBJECT
    var map = {};
    map.mapDiv = document.getElementById('map');
    map.googleMap = new google.maps.Map(map.mapDiv, {
      center: {lat: 47.629, lng: -122.211},
      zoom: 12
    });

    vm.getData = ajax.getData();

    vm.houseData = ajax.allHomeData;
    var data = ajax.allHomeData;

    vm.clickedAddress = [];
    vm.geoArray = [];

  //  GEO CODES THE ADDRESSES PASSED IN BY SIDE BAR FUNCTION BASED ON CLICKED VALUE
    var geoFunc = function(objectArray, iconValue) {
      for (var i = 0; i < objectArray.length; i++) {
        var geocoder = new google.maps.Geocoder();
        var geoArray = [];
        geocoder.geocode({'address': objectArray[i].address}, function(results, status) {
          results.forEach(function(obj) {
            geoArray.push(obj.geometry.location);
          })
          mapObject.clearMarkers();
          mapObject.drawMarkers(geoArray, iconValue);
        })
      }
    }

    // MAP FUNCTIONALITY
    var markers = [];
    var mapObject = {
      drawMarkers: function(geoArray, iconValue) {
        for (var i = 0; i < geoArray.length; i++) {
          var infowindow = new google.maps.InfoWindow({
            // content: '<p>Marker Location: ' + marker.getPosition() + '</p>'
            content: 'yo sam'
            // position: marker.position
          });
          var marker = new google.maps.Marker({
            position: geoArray[i],
            title: 'home',
            icon: iconValue
          });
          marker.addListener('click', function() {
            infowindow.open(map.googleMap, marker)
          })
          markers.push(marker);
        }
        mapObject.setMapOnAll(map.googleMap);
      },
      setMapOnAll: function(map) {
        for(var i = 0; i < markers.length; i++) {
          markers[i].setMap(map)
        }
      },
      clearMarkers: function() {
        mapObject.setMapOnAll(null);
        markers = [];
      }
    }


    vm.showSideCompleted = function(clickedValue, iconValue){
      console.log('SHOW SIDE ICON WITH : ', iconValue);
      vm.clickedAddress = [];
      var icon;
      for (var key in data) {
        var obj = data[key];
        if(obj.status === clickedValue) {
          vm.clickedAddress.push(obj);
        }
      }
      geoFunc(vm.clickedAddress, iconValue)
    }

  }])
