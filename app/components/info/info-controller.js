'use strict';

// require(__dirname + '/../../ajax-service/data-service');

var url = require('url');

require(__dirname + '/../gallery/gallery-controller');

angular.module('InfoModule', ['AjaxService'])
  .controller('InfoController', ['ajax', '$controller', function(ajax, $controller) {

  // console.log('IMPORTING CONTROLLER : ', $controller('GalleryController'));
  // var lucy = $controller('GalleryController');
  //
  // this.puggle = lucy.singleHomeData
  //
  // this.bookie = lucy.singleHouseDataLoader();
  // console.log('lucy.singleHomeData : ', lucy.singleHomeData);

  var data = ajax.allHomeData;

  var string = document.URL

  var newId = url.parse(string).hash
  var useId = newId.split('').splice(10, 25).join('');
  console.log(useId);

  this.idUrl = useId;

  this.singleHomeData = {};

  // USE THE USE ID for the object look up


  this.singleHouseDataLoader = function(useId){
    // function doIt(useId) {

    console.log('DO IT CALLED WITH : ', useId);
    var singleHomeData = {};
    for (var key in data) {
      var obj = data[key]
      // if (data[key]._id == useId) {
      //   // console.log('THIS IS THE MATCHING OBJECT', obj);
      //   this.singleHomeData.address = obj.address;
      //   this.singleHomeData.sqft = obj.sqft;
      //   this.singleHomeData.bedrooms = obj.bedrooms;
      //   this.singleHomeData.bathrooms = obj.bathrooms;
      //   this.singleHomeData.lotsize = obj.lotsize;
      //   this.singleHomeData.schooldistrict = obj.schooldistrict;
      //   this.singleHomeData.elementary = obj.elementary;
      //   this.singleHomeData.middle = obj.middle;
      //   this.singleHomeData.hs = obj.hs;
      //   this.singleHomeData.status = obj.status;
      //   this.singleHomeData.pics = obj.pics;
      //   this.singleHomeData.mapPic = obj.pics[obj.pics.length-1];
      //   this.singleHomeData.frontPic = obj.pics[0];
      // }
      if (data[key]._id == useId) {
        // console.log('THIS IS THE MATCHING OBJECT', obj);
        this.singleHomeData.address = obj.address;
        this.singleHomeData.sqft = obj.sqft;
        this.singleHomeData.bedrooms = obj.bedrooms;
        this.singleHomeData.bathrooms = obj.bathrooms;
        this.singleHomeData.lotsize = obj.lotsize;
        this.singleHomeData.schooldistrict = obj.schooldistrict;
        this.singleHomeData.elementary = obj.elementary;
        this.singleHomeData.middle = obj.middle;
        this.singleHomeData.hs = obj.hs;
        this.singleHomeData.status = obj.status;
        this.singleHomeData.pics = obj.pics;
        this.singleHomeData.mapPic = obj.pics[obj.pics.length-1];
        this.singleHomeData.frontPic = obj.pics[0];
      }
    }
  // }
  // doIt(useId)
  }
  // PARSE OUT THE ID FROM THE URL AND USE THAT TO COMPARE AND CREAT THE OBJECT NECCESSAY FOR THE DOM RENDERING




  }])
