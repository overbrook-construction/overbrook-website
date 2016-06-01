'use strict';

const angular = require('angular');
require(__dirname + '/../gallery/gallery-controller');

require(__dirname + '/../../ajax-service/data-service');

angular.module('MapModule', ['AjaxService'])
  .controller('MapController', ['$http', '$location', 'ajax', '$controller', '$window', function($http, $location, ajax, $controller, $window) {


  //   vm.load = function() {
  //   var sleep = document.createElement('script');
  //   sleep.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBv4Sc8DwDft9TdcwDmS9d01SBmrCJFXA';
  //   document.body.appendChild(sleep);
  // }

    var vm = this;

    vm.completeIcon = './media/complete-home.svg';
    vm.constructionIcon = './media/construction-home.svg';
    vm.futureIcon = './media/future-home.svg';

    // MAP OBJECT
    var map = {};
    vm.initMap = function() {
    map.mapDiv = document.getElementById('map');
    map.googleMap = new google.maps.Map(map.mapDiv, {
      center: {lat: 47.629, lng: -122.211},
      zoom: 12
    });
  }
  // setTimeout(vm.initMap(), 5000);

    var data;


    vm.getData = function() {
      if ($window.localStorage){
        var yup = JSON.parse($window.localStorage.getItem('allHomeData'));
        console.log('YUP IS : ', yup);
        data = yup
      }
      else {

      ajax.getData();
      vm.houseData = ajax.allHomeData;
      data = ajax.allHomeData;
    }
  }
    // vm.getData = function() {
    //   ajax.getData();
    //   vm.houseData = ajax.allHomeData;
    // }

    vm.clickedAddress = [];
    vm.geoArray = [];
    vm.clickedPics = [];

  //  GEO CODES THE ADDRESSES PASSED IN BY SIDE BAR FUNCTION BASED ON CLICKED VALUE
  var geoFunc = function(objectArray, iconValue, callback) {
    for (var i = 0; i < objectArray.length; i++) {
      var geocoder = new google.maps.Geocoder();
      var geoArray = [];
      geocoder.geocode({'address': objectArray[i].address}, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK) {
          geoArray.push(results[0].geometry.location)
          callback();
        }

        // results.forEach(function(obj, i) {
        // })

        // INSERT A PROMISE HERE
        // returns a promise when all the promises in the iterable have finished



        console.log('GEO ARRAY : ', geoArray);
        mapObject.clearMarkers();
        mapObject.drawMarkers(geoArray, iconValue, objectArray);
      })
    }
  }

    var contentFig = 'sam Gruse';
    var homePic;

    // MAP FUNCTIONALITY
    var markers = [];
    var fake = ['Sam', 'dave', 'hilda']
    var mapObject = {
      drawMarkers: function(geoArray, iconValue, objectArray) {
        for (var i = 0; i < geoArray.length; i++) {

          var setContent = '<div><img class="popPic" src=' + objectArray[i].pics[0] + ' /></div>';

          var infowindow = new google.maps.InfoWindow({
            // content: setContent
            content: setContent
          });

          var marker = new google.maps.Marker({
            position: geoArray[i],
            title: objectArray[i].address,
            icon: iconValue
          });

          (function(marker, infowindow) {
            marker.addListener('click', function() {
              infowindow.open(map.googleMap, marker)
            })
          })(marker, infowindow);

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
      vm.clickedAddress = [];
      var icon;
      for (var key in data) {
        var obj = data[key];
        if(obj.status === clickedValue) {
          vm.clickedAddress.push(obj);
          // vm.clickedPics.push(obj.pics[0]);
        }
      }
      geoFunc(vm.clickedAddress, iconValue, function(){});
    }

  }])
