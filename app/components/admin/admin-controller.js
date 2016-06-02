'use strict';

// BRINGING IN THE SERVICE

angular.module('AdminModule', [])
  .controller('AdminController', ['$http', '$parse', '$window', function($http, $parse, $window) {

    var vm = this;

    var token;
    var adminRoute = 'http://localhost:3000/addHomes';
    var addUser = 'http://localhost:3000/addUser';

    var getUser = 'http://localhost:3000/userLogin';

    var picRoute = 'http://localhost:3000/addPics';

    vm.admin = false;

    vm.clearToken = function() {
      $window.localStorage.token = null;
    }

    //ADD USER FUNCTIONALITY

    // vm.addUser = function(admin) {
    //   console.log('LOGIN ROUTE HAS BEEN HIT WITH : ', admin);
    //   $http.post(addUser, admin)
    //   .success(function(data, status, headers, config) {
    //     console.log('ADDED ADMIN ');
    //     console.log('DATA IS : ', data);
    //
    //   })
    //   .error(function(data, status, headers, config) {
    //     console.log('ERROR SAVING ADMIN');
    //   })
    // }

    vm.login = function(user, cb){
      console.log('LOGIN HIT WITH USER : ', user);
      cb = cb || function() {};
      $http.get(getUser, {
        headers: {
          authorization: 'Basic ' + btoa(user.username + ':' + user.password)
        }})
        .then((res) => {
          // cb = cb || function() {};
          token = $window.localStorage.token = res.data.token;
          console.log('AUTH SERVICE : TOKEN GEN : ', token);
          vm.admin = true;
          cb(null, res);
        }, (err) => {
          cb(err);
        })
      }







    vm.allHouses;

    vm.submitHouse = function(newHouse) {
      $http.post(adminRoute, newHouse, {
        // headers: {
        //   token: 'blah'
        // }
      })
      .success(function(data, status, headers, config) {
        console.log('ADDED HOUSE FROM ADMIN CTRL');
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
      })
    }

    vm.getHouseData = function() {
      console.log('GET REQUEST HAS BEEN RECEIVED');
      $http.get(adminRoute)
      .success(function(data, status, headers, config) {
        console.log('DATA FROM GET IS : ', data);
        // allHouses.push(data);
        vm.allHouses = data;
      })
      .error(function(data, status, headers, config) {
        console.log('CANNONT GET HOUSES');
      })
    }

    vm.updateHouse = function(house) {
      vm.updateHouse.rendered = null;
      $http.put(adminRoute + '/' + house._id, house, {

      }).success(function(data, status, headers, config) {
        console.log('DATA FROM GET IS : ', data);
      })
      .error(function(data, status, headers, config) {
              console.log('CANNONT GET HOUSES');
      })
    }

    vm.deleteHouse = function(house, token) {
      console.log('DELETE HOUSE HIT WITH : ', house);
      $http.delete(adminRoute + '/' + house, {

      }).success(function(data, status, headers, config) {
        console.log(house + ' HAS BEEN DELETED');
      })
      .error(function(data, status, headers, config) {
        console.log('CANNOT DELETE HOUSES');
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
    // vm.submitForm = function(ev) {
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
