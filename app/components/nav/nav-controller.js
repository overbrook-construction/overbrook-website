'use strict';

require(__dirname + '/../gallery/gallery-controller');

angular.module('NavModule', [])
  .controller('navController', ['$controller', function($controller) {

      // // this.changeUp = $controller('GalleryController').changeState()
      //
      // var yup = $controller('GalleryController');
      //
      // // console.log(yup.changeState);
      //
      // // var yup = $controller('GalleryController');
      //
      // // this.changeUp = $controller('GalleryController').changeState();
      // // this.changeUp = yup.changeState();
      // // console.log(yup.changeState());

      // this.changeUp = function() {
      //   yup.changeState();
      // }



  }])
  .directive('navDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './nav-view.html'
    }
  })
