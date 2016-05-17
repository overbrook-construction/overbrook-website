'use strict';

angular.module('GalleryModule', [])
  .controller('GalleryController', function() {
    this.imgSrc = ['./media/630-001.jpg', './media/2432-001.jpg', './media/2434-001.jpg', './media/7720-001.jpg', './media/7728-001.jpg', './media/8102-001.jpg'];

    this.showInfo = false;

  })
