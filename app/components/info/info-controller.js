'use strict';

// require(__dirname + '/../../ajax-service/data-service');

require(__dirname + '/../gallery/gallery-controller');

angular.module('InfoModule', ['AjaxService'])
  .controller('InfoController', ['ajax', '$controller', function(ajax, $controller) {

    console.log('IMPORTING CONTROLLER : ', $controller('GalleryController'));



  var lucy = $controller('GalleryController');

  this.puggle = lucy.singleHomeData

  this.bookie = lucy.singleHouseDataLoader();
  console.log('lucy.singleHomeData : ', lucy.singleHomeData);

  }])
