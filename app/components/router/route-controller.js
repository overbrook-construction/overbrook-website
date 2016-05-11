'use strict';

angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/home', {
        templateUrl: './home-view.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
      })
      .when('/about', {
        templateUrl: './about-view.html'
      })
      .when('/map', {
        templateUrl: './map-view.html'
      })
      .when('/gallery', {
        templateUrl: './gallery-view.html'
      })
      .when('/contact', {
        templateUrl: './contact-view.html'
      })
      .otherwise({
        redirectTo: '/home'
      })
  }])
