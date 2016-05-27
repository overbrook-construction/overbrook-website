'use strict';

// require(__dirname + '/../../ajax-service/data-service');

var url = require('url');

require(__dirname + '/../gallery/gallery-controller');

angular.module('InfoModule', ['AjaxService'])
  .controller('InfoController', ['ajax', '$controller', function(ajax, $controller) {

  var data = ajax.allHomeData;

  var string = document.URL

  var newId = url.parse(string).hash
  var useId = newId.split('').splice(10, 25).join('');
  console.log(useId);

  this.idUrl = useId;

  this.singleHomeData = {};

  var frontPicture = [];
  this.frontPicture = frontPicture

  this.singleHouseDataLoader = function(useId){

    console.log('DO IT CALLED WITH : ', useId);
    var singleHomeData = {};
    for (var key in data) {
      var obj = data[key]
      if (data[key]._id == useId) {
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
        frontPicture.push(obj.pics[0]);
        this.singleHomeData.changePic = function(key, value) {
          frontPicture.pop();
          frontPicture.push(value);
        }
      }
    }

  }

  }])
