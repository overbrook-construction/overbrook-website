'use strict';

var ajaxService = angular.module('AjaxService', []);

ajaxService.factory('ajax', ['$http', function($http) {

  var obj = {};

  obj.sayName = function() {
    console.log('DAVID');
  }

  obj.getData = function() {
    console.log('GET DATA IS BEING HIT');
    $http.get('./data/homes.json')
    .then(function successCallback(response) {
      // markerData = response.data
      console.log(response);
    }, function errorCallback(response) {
    })
  }

return obj;

}])
