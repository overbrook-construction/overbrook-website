'use strict';

var ajaxService = angular.module('AjaxService', []);

ajaxService.factory('ajax', ['$http', function($http) {


  var obj = {};

  obj.allHomeData;
  // obj.singleHomeId;

  obj.sayName = function() {
    console.log('DAVID');
  }

  obj.getData = function() {
    // console.log('GET DATA IS BEING HIT');
    $http.get('./data/new-home-data.json')
    .then(function successCallback(response) {
      console.log('RESPONSE FROM HTTP GET DATA-SERVICE : ', response.data);
      obj.allHomeData = response.data;

      // obj.singleHomeId =

    }, function errorCallback(response) {
      // console.log('ERROR', response);
    })
  }

return obj;

}])
