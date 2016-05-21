'use strict';

require('./data-service');

angular.module('HomeModule', ['AjaxService'])

  .controller('HomeController', ['ajax', function(ajax) {

    this.talk = function() {
    ajax.sayName();

    }
    this.getData = function() {
      ajax.getData();
    }
  }])
