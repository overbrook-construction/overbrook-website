'use strict';

require(__dirname + '/../../ajax-service/data-service');

angular.module('GalleryModule', ['AjaxService'])
  .controller('GalleryController', ['$location', 'ajax', function($location, ajax) {

  this.getData = ajax.getData();

  this.showInfo = false;
  this.houseData = ajax.allHomeData;
  var data = ajax.allHomeData;

  this.changeStateFalse = function(){
    // console.log('CHANGE STATE IS BEING HIT');
    this.showInfo = false;
  }

  this.changeStateTrue = function() {
    this.showInfo = true;
  }

  this.singleHomeData = {};

    this.showInfoView = function() {
      $location.path('/info');
    }

    this.runSingleData = function(id) {
      console.log('RUN SINLE DATA HIT FROM MAP CTRL WITH : ', id)
      this.singleHouseDataLoader(id);
    }

    this.singleHouseDataLoader = function(id){
      var singleHomeData = {};
      for (var key in data) {
        var obj = data[key]
        if (data[key]._id == id) {
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
    }
  }])

// USE A FACTORY OR SERVICE TO TRANSFER THE OBJECT BETWEEN THE GALLERY AND INFO VIEWS BASED ON CLICKED HOMES

// .factory('HomeFactory', function() {
//
//   this.singleHouseDataLoader = function(id){
//     console.log('ID SENT FROM VIEW : ', id + ' singleHomeDataLoader is called');
//     var singleHomeData = {};
//     for (var key in data) {
//       var obj = data[key]
//       if (data[key]._id == id) {
//         // console.log('THIS IS THE MATCHING OBJECT', obj);
//         singleHomeData.address = obj.address;
//         singleHomeData.sqft = obj.sqft;
//         singleHomeData.bedrooms = obj.bedrooms;
//         singleHomeData.bathrooms = obj.bathrooms;
//         singleHomeData.lotsize = obj.lotsize;
//         singleHomeData.schooldistrict = obj.schooldistrict;
//         singleHomeData.elementary = obj.elementary;
//         singleHomeData.middle = obj.middle;
//         singleHomeData.hs = obj.hs;
//         singleHomeData.status = obj.status;
//         singleHomeData.pics = obj.pics;
//         singleHomeData.mapPic = obj.pics[obj.pics.length-1];
//         singleHomeData.frontPic = obj.pics[0];
//       }
//     }
//   }
//   return singleHomeData
// })
