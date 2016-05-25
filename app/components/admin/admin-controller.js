'use strict';

angular.module('AdminModule', [])
  .controller('AdminController', ['$http', '$parse', function($http, $parse) {


    var adminRoute = 'http://localhost:3000/addHomes';

    var picRoute = 'http://localhost:3000/addPics';

    var allHouses = [];
    this.allHouses = allHouses;

    this.submitHouse = function(newHouse) {
      $http.post(adminRoute, newHouse)
      .success(function(data, status, headers, config) {
        console.log('ADDED HOUSE FROM ADMIN CTRL');
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
      })
    }

    this.getHouseData = function() {
      console.log('GET REQUEST HAS BEEN RECEIVED');
      $http.get(adminRoute)
      .success(function(data, status, headers, config) {
        console.log('DATA FROM GET IS : ', data);
        allHouses.push(data);
        console.log(allHouses);
      })
      .error(function(data, status, headers, config) {
        console.log('CANNONT GET HOUSES');
      })
    }

    // function upload(response, request){
    //   console.log('Request handler "upload" was called');
    //   var form = new formidable.IncomingForm();
    //   console.log('about to parse');
    //   form.parse(request, function(error, fields, files){
    //     console.log('parsing done');
    //
    //   fs.rename(files.upload.path, './tmp/test.png', function(error){
    //     if (error){
    //       fs.unlink('./tmp/test.png');
    //       fs.rename(files.upload.path, './tmp/test.png');
    //     };
    //   });
    //
    //   response.writeHead(200, {'Content-Type': 'text/html'});
    //   response.write('received image: <br/>');
    //   response.write("<img src='/show' />");
    //   response.end();
    //   });
    // };
    //
    // function show(response){
    //   console.log('Request handler "show" was called.');
    //   response.writeHead(200, {'Content-Type': 'image/png'});
    //   fs.createReadStream('./tmp/test.png').pipe(response);
    // };



    // var form = document.forms.namedItem('fileinfo');
    // this.submitForm = function(ev) {
    //   var selectedFile = document.getElementById('imgFile').files[0];
    //   console.log('SELECTED FILE FROM FORM : ', selectedFile);
    //
    //   // var x = new Buffer(selectedFile).toString('base64');
    //   // console.log('X IS : ', x);
    //
    //
    //   // oData.append('CustomField', 'This is extra data');
    //   var headers = {
    //     'Content-Type': 'image/jpeg'
    //   }
    //
    //   $http.post(picRoute, headers, selectedFile, status)
    //   .success(function(data, status, headers, config) {
    //     console.log('ADDED HOUSE FROM ADMIN CTRL');
    //   })
    //   .error(function(data, status, headers, config) {
    //     console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
    //   })
    //
    //
    // }


  }])
