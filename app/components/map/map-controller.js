'use strict';

const angular = require('angular');

require(__dirname + '/../../ajax-service/data-service');

angular.module('MapModule', ['AjaxService'])
  .controller('MapController', ['$http', '$location', 'ajax', function($http, $location, ajax) {

    // NON WORKING MAP CODE

    this.houseData = ajax.allHomeData;
    var data = ajax.allHomeData;
    // console.log(data);

    this.filterAddresses = [];

    var completedHomesAdd = [];
    var futureHomesAdd = [];
    var constructingHomesAdd = [];

    var geoCompleted = [];
    var geoFuture = [];
    var geoConstructing = [];
    var newShit;

    var geoFunc = function(jsonObject) {
      for (var i = 0; i < 3; i++) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': jsonObject.address}, function(results, status) {
          results.forEach(function(obj) {
            geoCompleted.push(obj.geometry.location);
            // var array = [];
            // array.push(obj.geometry.location);
            // console.log(array);
            // return array;
          })
        })
      }
    }

     function getAddress(geoFunc) {
      for (var key in data) {
        var obj = data[key];
          if(obj.status === 'Completed') {
            completedHomesAdd.push(obj.address);
            geoFunc(obj);
            // console.log(geoCompleted);
          }
          if(obj.status === 'Constructing') {
            futureHomesAdd.push(obj.address);
            // geoFunc(obj);
          }
          if(obj.status === 'Future') {
            constructingHomesAdd.push(obj.address);
            // geoFunc(obj);
          }
      }
    }
    getAddress(geoFunc);
    // console.log(completedHomesAdd);
    // console.log(futureHomesAdd);
    // console.log(constructingHomesAdd);



         this.initMap = function() {
          function map() {
          var mapDiv = document.getElementById('map');
          var map = new google.maps.Map(mapDiv, {
            center: {lat: 47.629, lng: -122.211},
            zoom: 12
          });
          for (var j = 0; j < geoCompleted.length; j++){
            var marker = new google.maps.Marker({
              map: map,
              position: geoCompleted[j]
            });
            var infowindow = new google.maps.InfoWindow({
              content: '<p>Marker Location:' + marker.getPosition() + '</p>'
            });
          }
        }
        setTimeout(map, 500)
      }




          // function geocode() {
          //   for (var i = 0; i < markerData.length; i++){
          //     var geocoder = new google.maps.Geocoder();
          //     geocoder.geocode({'address': markerData[i].address}, function(results, status) {
          //       results.forEach(function(obj){
          //         geotags.push(obj.geometry.location);
          //       })
          //     })
          //   }
          // }



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
