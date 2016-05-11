'use strict';

angular.module('NavModule', [])
  .controller('navController', function() {

  })
  .directive('navDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './nav-view.html'
    }
  })
