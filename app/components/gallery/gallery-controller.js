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

    // this.runSingleData = this.singleHouseDataLoader(id);

// MAKING CODE THAT DISPLAYS INDIVIUDAL HOME DATA BASED ON ID INSIDE THE OBJECT
this.singleHouseDataLoader = function(id){
  console.log('ID SENT FROM VIEW : ', id);

  // data.forEach(function(obj){
  //   if (obj.)
  // })

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

  // for (var id in data) {
    // var obj = data[id];
    // if(obj._id = id) {
      // console.log('OBJECT WITH MATCH ID IS : ', obj);
        // this.singleHomeData.address = obj.address;
        // this.singleHomeData.sqft = ajax.allHomeData[key].sqft;
        // this.singleHomeData.bedrooms = ajax.allHomeData[key].bedrooms;
        // this.singleHomeData.bathrooms = ajax.allHomeData[key].bathrooms;
        // this.singleHomeData.lotsize = ajax.allHomeData[key].lotsize;
    // }
  // }
}


    // this.singleHouseDataLoader = function(key){
    //   console.log('SINGLE HOUSE LOADER HIT FROM MAP CTRL')
    //   this.singleHomeData.address = ajax.allHomeData[key].address;
    //   this.singleHomeData.sqft = ajax.allHomeData[key].sqft;
    //   this.singleHomeData.bedrooms = ajax.allHomeData[key].bedrooms;
    //   this.singleHomeData.bathrooms = ajax.allHomeData[key].bathrooms;
    //   this.singleHomeData.lotsize = ajax.allHomeData[key].lotsize;
    //   this.singleHomeData.schooldistrict = ajax.allHomeData[key].schooldistrict;
    //   this.singleHomeData.elementary = ajax.allHomeData[key].elementary;
    //   this.singleHomeData.middle = ajax.allHomeData[key].middle;
    //   this.singleHomeData.hs = ajax.allHomeData[key].hs;
    //   this.singleHomeData.status = ajax.allHomeData[key].status;
    //   this.singleHomeData.pics = ajax.allHomeData[key].pics;
    //   this.singleHomeData.mapPic = ajax.allHomeData[key].pics[ajax.allHomeData[key].pics.length-1];
    //   this.singleHomeData.frontPic = ajax.allHomeData[key].pics[0];
    // }

  }]);
