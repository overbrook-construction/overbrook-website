'use strict';
//
// var nodeMailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');

// var emailService = require(__dirname + '/../../../services/email-service');
//
angular.module('ContactModule', [])
.controller('contactController', ['$http', function($http) {
  var emailRoute = 'http://localhost:3000/email'
  this.sendEmail = function(user) {
    console.log('USER FROM FORM IS : ', user);
    $http.post(emailRoute, user)
    .success(function(data, status, headers, config) {
      console.log('SUCCESSFULL EMAIL FROM CONTROLLER');
    })
    .error(function(data, status, headers, config) {
      console.log('ERROR SENDING EMAIL');
    })
  }
}])
