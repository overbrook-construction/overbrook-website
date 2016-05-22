'use strict';

require(__dirname + '/../../ajax-service/data-service');

angular.module('GalleryModule', ['AjaxService'])
  .controller('GalleryController', ['$location', 'ajax', function($location, ajax) {

  this.getData = ajax.getData();

  this.showInfo = false;
  this.houseData = ajax.allHomeData;

  this.changeState = function(){
    console.log('CHANGE STATE IS BEING HIT');
    this.showInfo = false;
  }

  this.singleHomeData = {};
    this.showInfoView = function() {
      $location.path('/info');
    }

    this.singleHouseDataLoader = function(key){
      this.singleHomeData.address = ajax.allHomeData[key].address;
      this.singleHomeData.sqft = ajax.allHomeData[key].sqft;
      this.singleHomeData.bedrooms = ajax.allHomeData[key].bedrooms;
      this.singleHomeData.bathrooms = ajax.allHomeData[key].bathrooms;
      this.singleHomeData.lotsize = ajax.allHomeData[key].lotsize;
      this.singleHomeData.schooldistrict = ajax.allHomeData[key].schooldistrict;
      this.singleHomeData.elementary = ajax.allHomeData[key].elementary;
      this.singleHomeData.middle = ajax.allHomeData[key].middle;
      this.singleHomeData.hs = ajax.allHomeData[key].hs;
      this.singleHomeData.status = ajax.allHomeData[key].status;
      this.singleHomeData.pics = ajax.allHomeData[key].pics;
      this.singleHomeData.mapPic = ajax.allHomeData[key].mapPic;
      this.singleHomeData.frontPic = ajax.allHomeData[key].pics[0];
    }

  }]);
