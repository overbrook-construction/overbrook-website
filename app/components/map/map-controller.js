'use strict';

const angular = require('angular');
require(__dirname + '/../gallery/gallery-controller');

require(__dirname + '/../../ajax-service/data-service');

angular.module('MapModule', ['AjaxService'])
  .controller('MapController', ['$http', '$location', 'ajax', '$controller', function($http, $location, ajax, $controller) {

    var vm = this;

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

// POSSIBLE GEOCODING STRATEGY
var geoFunc = function(objectArray, geoObject) {
  for (var i = 0; i < 3; i++) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'address': objectArray[0].address}, function(results, status) {
      results.forEach(function(obj) {
        geoObject.geoArray.push(obj.geometry.location);
      })
      console.log('Completed Homes GEOTAGS : ', geoObject.geoArray);
    })
  }
}


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
        var newObject = {};
        newObject.name = clickedValue
        newObject.geoArray = [];
          geoFunc(vm.clickedAddress, newObject)
    }





//  PROBABLY DONT NEED THIS
    // var galleryCtrl = $controller('GalleryController');
    // vm.viewChangeToGallery = function(id) {
    //   galleryCtrl.runSingleData(id);
    //   $location.path('/gallery');
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
    //
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
