'use strict';

var dropzone = require('dropzone');

angular.module('AdminModule', [])
  .controller('AdminController', ['$http', '$parse', function($http, $parse) {


    var adminRoute = 'http://localhost:3000/addHomes'

    var picRoute = 'http://localhost:3000/addPics'

    this.submitHouse = function(newHouse) {
      $http.post(adminRoute, newHouse)
      .success(function(data, status, headers, config) {
        console.log('ADDED HOUSE FROM ADMIN CTRL');
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
      })
    }

    this.uploadFile = function(image){
      console.log('UPLOAD FILE HIT WITH : ', image)
      $http.post(picRoute, image)
      .success(function(data, status, headers, config) {
        console.log('ADDED IMAGE');
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR SAVING IMAGE');
      })
    }

  }])


  // var adminRoute = 'http://localhost:3000/addHomes'
  // this.submitHouse = function(newHouse) {
  //   $http.post(adminRoute, newHouse)
  //   .success(function(data, status, headers, config) {
  //     console.log('ADDED HOUSE FROM ADMIN CTRL');
  //   })
  //   .error(function(data, status, headers, config) {
  //     console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
  //   })
  // }
