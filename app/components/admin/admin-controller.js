
angular.module('AdminModule', [])
  .controller('AdminController', ['$http', function($http) {
    var adminRoute = 'http://localhost:3000/addHomes'
    this.submitHouse = function(newHouse) {
      $http.post(adminRoute, newHouse)
      .success(function(data, status, headers, config) {
        console.log('ADDED HOUSE FROM ADMIN CTRL');
      })
      .error(function(data, status, headers, config) {
        console.log('ERROR SAVING HOUSE FROM ADMIN CTRL');
      })
    }
  }])
