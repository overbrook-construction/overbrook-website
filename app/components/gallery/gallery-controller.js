'use strict';

require(__dirname + '/../../ajax-service/data-service');

angular.module('GalleryModule', ['AjaxService'])
  .controller('GalleryController', ['$location', 'ajax', function($location, ajax) {

  this.showInfo = false;
  this.houseData = ajax.allHomeData;

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
      this.singleHomeData.status = ajax.allHomeData[key].status;
      this.singleHomeData.pics = ajax.allHomeData[key].pics;
      this.singleHomeData.mapPic = ajax.allHomeData[key].mapPic;
      this.singleHomeData.frontPic = ajax.allHomeData[key].pics[0];
    }

  }]);
