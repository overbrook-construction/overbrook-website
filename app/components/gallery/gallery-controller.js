'use strict';

require(__dirname + '/../../ajax-service/data-service');

angular.module('GalleryModule', ['AjaxService'])
  .controller('GalleryController', ['$location', 'ajax', function($location, ajax) {
    // this.imgSrc = ['./media/630-001.jpg', './media/2432-001.jpg', './media/2434-001.jpg', './media/7720-001.jpg', './media/7728-001.jpg', './media/8102-001.jpg'];

  // this.imgSrc = [ajax.allHomeData.twoFourThreeTwo.pics[0],
  //                ajax.allHomeData.twoFourThreeFour.pics[0],
  //                ajax.allHomeData.sevenSevenTwoZero.pics[0]
  // ]

  this.houseData = ajax.allHomeData;

  console.log('HOUSE DATA : ', this.houseData);


    // this.imgSrc = ajax.allHomeData.completed.twoFourThreeTwo.pics
    // console.log(this.jsonImage = ajax.allHomeData.completed.lucy.pics[0])

    // this.imgSrc = './media/630-001.jpg';


    this.showInfoView = function() {
      $location.path('/info');
    }

    this.showClickedHome = function(clickedHome) {
      console.log('CLICKED HOME FUNCTION HAS BEEN HIT WITH : ', clickedHome);
      // Some function that grabs appropriate json data based on id
      var shd = {};
      shd.address = ajax.allHomeData.completed.clickedHome.address;
      return shd;
    }

    this.info = 'dog';

    console.log('INFO VIEW AJAX SERVICE DATA : ', ajax.allHomeData);

  }]);
