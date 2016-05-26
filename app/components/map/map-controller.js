'use strict';

const angular = require('angular');
require(__dirname + '/../gallery/gallery-controller');

require(__dirname + '/../../ajax-service/data-service');

angular.module('MapModule', ['AjaxService'])
  .controller('MapController', ['$http', '$location', 'ajax', '$controller', function($http, $location, ajax, $controller) {

    var vm = this;


    // MAP OBJECT

    var map = {};
    map.mapDiv = document.getElementById('map');
    map.googleMap = new google.maps.Map(map.mapDiv, {
    center: {lat: 47.629, lng: -122.211},
    zoom: 12
  });


    // NON WORKING MAP CODE

    // MAKE AJAX REQUEST ONCE COMING TO PAGE / DOES THIS FILL THE houseData with data right away
    //  NEED TO MAKE SURE AJAX REQUEST IS AVAILABLE ON ALL PAGES
    vm.getData = ajax.getData();
    // THIS INFORMATION IS ONLY AVAILABLE IF AJAX REQUEST HAPPENS PRIOR

    vm.houseData = ajax.allHomeData;
    var data = ajax.allHomeData;

    // ARRAY TO HOLD THE ADDRESSES BASED ON CLICKED BUTTON
    vm.clickedAddress = [];
    vm.geoArray = [];



//  GEO CODES THE ADDRESSES PASSED IN BY SIDE BAR FUNCTION BASED ON CLICKED VALUE

var geoFunc = function(objectArray) {
  for (var i = 0; i < objectArray.length; i++) {
    var geocoder = new google.maps.Geocoder();
    var geoArray = [];
    geocoder.geocode({'address': objectArray[i].address}, function(results, status) {
      results.forEach(function(obj) {
        geoArray.push(obj.geometry.location);
      })
      mapObject.clearMarkers();
      mapObject.drawMarkers(geoArray);
    })
  }
}


// MAP FUNCTIONALITY
var markers = [];
var mapObject = {
  drawMarkers: function(geoArray) {
    console.log('DRAW MARKERS HAS BEEN HIT 2');
    for (var i = 0; i < geoArray.length; i++) {
      var marker = new google.maps.Marker({
        position: geoArray[i],
        title: 'sam'
      });
      markers.push(marker);
      mapObject.setMapOnAll(map.googleMap);
    }
  },
  setMapOnAll: function(map) {
  for(var i = 0; i < markers.length; i++) {
    markers[i].setMap(map)
  }
},
  clearMarkers: function() {
    console.log('CLEAR MARKERS HAS BEEN HIT 1');
    mapObject.setMapOnAll(null);
    markers = [];
  }
}


// var map;
// var markers = [];
//
// // Adds a marker to the map and push to the array.
// function addMarker(location) {
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
//   markers.push(marker);
// }
//
// // Sets the map on all markers in the array.
// function setMapOnAll(map) {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//   }
// }
//
// // Removes the markers from the map, but keeps them in the array.
// function clearMarkers() {
//   setMapOnAll(null);
// }
//
// // Shows any markers currently in the array.
// function showMarkers() {
//   setMapOnAll(map);
// }
//
// // Deletes all markers in the array by removing references to them.
// function deleteMarkers() {
//   clearMarkers();
//   markers = [];
// }













// var infowindow = new google.maps.InfoWindow({
//   content: '<p>Marker Location: ' + marker.getPosition() + '</p>'
// });
// function drawMarkers(geoArray) {
//   for (var i = 0; i < geoArray.length; i++) {
//     var marker = new google.maps.Marker({
//       map: map.googleMap,
//       position: geoArray[i]
//     });
//     marker.setMap(null);
//     marker.setMap(map.googleMap)
//     // var infowindow = new google.maps.InfoWindow({
//     //   content: '<p>Marker Location: ' + marker.getPosition() + '</p>'
//     // });
//   }
// }





  // SHOW SIDE BAR ADDRESS STARTING WITH COMPLETE AND THEN CHANGING ON BUTTON PRESS
  // EVENTUALLY HAVE SIDE BAR SHOWING AND MAP SHOW FOR SPECIFIED STATUS HAPPEN ON THE SAME FUNCTION
    vm.showSideCompleted = function(clickedValue){
      // console.log('SHOW COMPLETED SIDE HIT WITH : ', clickedValue);
      vm.clickedAddress = [];
      for (var key in data) {
        var obj = data[key];
          if(obj.status === clickedValue) {
            vm.clickedAddress.push(obj);
          }
        }
          geoFunc(vm.clickedAddress)
    }


    // INITIATES THE MAP UPON PAGE LOAD
      //    vm.initMap = function() {
      //     function map() {
      //       map.mapDiv;
      //       map.googleMap;
      //       // var mapDiv = document.getElementById('map');
      //     //   map.googleMap = new google.maps.Map(mapDiv, {
      //     //   center: {lat: 47.629, lng: -122.211},
      //     //   zoom: 12
      //     // });
      //   }
      //   setTimeout(map, 500)
      // }



          //   function map() {
          //   var mapDiv = document.getElementById('map');
          //   var map = new google.maps.Map(mapDiv, {
          //     center: {lat: 47.629, lng: -122.211},
          //     zoom: 12
          //   });
          //   for (var j = 0; j < geotags.length; j++){
          //     var marker = new google.maps.Marker({
          //       map: map,
          //       position: geotags[j]
          //     });
          //     var infowindow = new google.maps.InfoWindow({
          //       content: '<p>Marker Location:' + marker.getPosition() + '</p>'
          //     });
          //   }
          // }




    // this.filterAddresses = [];
    //
    // var completedHomesAdd = [];
    // var futureHomesAdd = [];
    // var constructingHomesAdd = [];
    //
    // var geoCompleted = [];
    // var geoFuture = [];
    // var geoConstructing = [];
    // var newShit;
    //
    // this.construct = geoConstructing;
    // this.comp = geoCompleted;
    // this.future = geoFuture;
    //
    // var geoFunc = function(jsonObject, geoArray) {
    //   for (var i = 0; i < 3; i++) {
    //     var geocoder = new google.maps.Geocoder();
    //     geocoder.geocode({'address': jsonObject.address}, function(results, status) {
    //       results.forEach(function(obj) {
    //         // geoCompleted.push(obj.geometry.location);
    //         // var array = [];
    //         // array.push(obj.geometry.location);
    //         // console.log('CREATED ARRAY : ', array);
    //         // return array;
    //         geoArray.push(obj.geometry.location);
    //         console.log('Future : ', geoFuture);
    //       })
    //     })
    //   }
    // }
    //
    //  function getAddress(geoFunc) {
    //   for (var key in data) {
    //     var obj = data[key];
    //       if(obj.status === 'Completed') {
    //         completedHomesAdd.push(obj.address);
    //          geoFunc(obj, geoCompleted);
    //       }
    //       if(obj.status === 'Future') {
    //         futureHomesAdd.push(obj.address);
    //         geoFunc(obj, geoFuture);
    //       }
    //       if(obj.status === 'Constructing') {
    //         constructingHomesAdd.push(obj.address);
    //         geoFunc(obj, geoConstructing);
    //       }
    //   }
    // }
    //
    //   // function getFuture(geoFun) {
    //   //   for (var key in data) {
    //   //     var obj = data[key];
    //   //       if(obj.status === 'Future') {
    //   //         futureHomesAdd.push(obj.address);
    //   //          geoFunc(obj, geoFuture);
    //   //       }
    //   //       if(obj.status === 'Completed') {
    //   //         completedHomesAdd.push(obj.address);
    //   //          geoFunc(obj, geoCompleted);
    //   //       }
    //   //     }
    //   //   }
    // getAddress(geoFunc);
    // // getFuture(geoFunc);
    //
    // var map = {};
    // map.googleMapEl = document.getElementById('map');
    // map.googleMap;
    // map.markerArray = [];
    //
    //      this.initMap = function() {
    //       function map() {
    //         var mapDiv = document.getElementById('map');
    //        map.googleMap = new google.maps.Map(mapDiv, {
    //         center: {lat: 47.629, lng: -122.211},
    //         zoom: 12
    //       });
    //     }
    //     setTimeout(map, 500)
    //   }
    //
    //   this.redrawMarkers = function(geoArray) {
    //     console.log('REDRAW MARKERS HIT with : ', geoArray);
    //     for (var j = 0; j < geoArray.length; j++){
    //       var marker = new google.maps.Marker({
    //         map: map,
    //         position: geoArray[j]
    //       });
    //       var infowindow = new google.maps.InfoWindow({
    //         content: '<p>Marker Location:' + marker.getPosition() + '</p>'
    //       });
    //     }
    //     console.log('MAP IS ', map);
    //     marker.setMap(map);
    //   }
    //
    //
    //       function geocode() {
    //         for (var i = 0; i < markerData.length; i++){
    //           var geocoder = new google.maps.Geocoder();
    //           geocoder.geocode({'address': markerData[i].address}, function(results, status) {
    //             results.forEach(function(obj){
    //               geotags.push(obj.geometry.location);
    //             })
    //           })
    //         }
    //       }









// WORKING CODE

    // this.sideBar = [];
    // var sideBar = [];
    //
    // this.houseData = ajax.allHomeData;
    //
    // var mockHouseArray = [];
    // this.realMockArray = mockHouseArray;
    //
    // this.viewChangeToGallery = function() {
    //   $location.path('/gallery');
    // }
    //
    // var geotags = [];
    // var markerData = [];
    //
    // this.completedHomes = './data/homes.json';
    // this.underConstruction = './data/homesTwo.json';
    //
    // this.getData = function(route) {
    //
    //   markerData = [];
    //   geotags = [];
    //
    //   $http.get(route)
    //   .then(function successCallback(response) {
    //     markerData = response.data
    //       for (var i = 0; i <markerData.length; i++){
    //         mockHouseArray.push(markerData[i].address)
    //         sideBar.push(markerData[i].address)
    //       }
    //     function geocode() {
    //       for (var i = 0; i < markerData.length; i++){
    //         var geocoder = new google.maps.Geocoder();
    //         geocoder.geocode({'address': markerData[i].address}, function(results, status) {
    //           results.forEach(function(obj){
    //             geotags.push(obj.geometry.location);
    //           })
    //         })
    //       }
    //     }
    //
    //     function initMap() {
    //       function map() {
    //       var mapDiv = document.getElementById('map');
    //       var map = new google.maps.Map(mapDiv, {
    //         center: {lat: 47.629, lng: -122.211},
    //         zoom: 12
    //       });
    //       for (var j = 0; j < geotags.length; j++){
    //         var marker = new google.maps.Marker({
    //           map: map,
    //           position: geotags[j]
    //         });
    //         var infowindow = new google.maps.InfoWindow({
    //           content: '<p>Marker Location:' + marker.getPosition() + '</p>'
    //         });
    //       }
    //     }
    //     setTimeout(map, 500)
    //   }
    //     geocode();
    //     initMap();
    //   }, function errorCallback(response) {
    //   })
    // }
  }])
