'use strict';

require(__dirname + '/../../ajax-service/data-service');

angular.module('HomeModule', ['AjaxService'])

  .controller('HomeController', ['ajax', function(ajax) {

    this.talk = function() {
    ajax.sayName();

    }
    this.getData = function() {
      ajax.getData();
    }
  }])
