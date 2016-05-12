'use strict';



angular.module('MapModule', [])
  .controller('MapController', function() {
    var geotags = [];
    var markerData = [
      {
        address: "2432 Evergreen Point Road Medina, WA 98039"
      },
      {
        address: "2434 Evergreen Point Road Medina, WA 98039"
      },
      {
        address: "2436 Evergreen Point Road Medina, WA 98039"
      },
      {
        address: "7720 Overlake Drive W Medina, WA 98039"
      },
    ];
    this.geocode = function() {
      for (var i = 0; i < markerData.length; i++){
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({'address': markerData[i].address}, function(results, status) {
          results.forEach(function(obj){
            geotags.push(obj.geometry.location)
          })
        })
      }
    }
    this.initMap = function() {
      var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
        center: {lat: 47.629, lng: -122.211},
        zoom: 12
      });
      for (var j = 0; j < geotags.length; j++){
        var marker = new google.maps.Marker({
          map: map,
          position: geotags[j]
        });
        var infowindow = new google.maps.InfoWindow({
          content: '<p>Marker Location:' + marker.getPosition() + '</p>'
        });
      }
    }
  })







//   var marker = new google.maps.Marker({
//     map: map,
//     position: results[0].geometry.location
//   });
//   var infowindow = new google.maps.InfoW
// });
//
// var address1 = newAddress;
// createMarker(address1);
//
//
//
//
//
//
//     this.initMap = function() {
//       var mapDiv = document.getElementById('map');
//       var map = new google.maps.Map(mapDiv, {
//         center: {lat: 47.629, lng: -122.211},
//           zoom: 12
//       });
//       var geocoder = new google.maps.Geocoder();
//       var address = "1269 110th AVE NE Bellevue, WA 98004"
//       geocoder.geocode({'address': address}, function(results, status) {
//         var marker = new google.maps.Marker({
//           map: map,
//           position: results[0].geometry.location
//         });
//         var infowindow = new google.maps.InfoWindow({
//           content: '<p>Marker Location:' + marker.getPosition() + '</p>'
//         });
//       });
//
//     }
//   })


  // 'use strict';
  //
  // angular.module('MapModule', [])
  //   .controller('MapController', function() {
  //     this.initMap = function() {
  //       var mapDiv = document.getElementById('map');
  //       var map = new google.maps.Map(mapDiv, {
  //         center: {lat: 47.629, lng: -122.211},
  //           zoom: 12
  //       });
  //       var geocoder = new google.maps.Geocoder();
  //       var address = "1269 110th AVE NE Bellevue, WA 98004"
  //       geocoder.geocode({'address': address}, function(results, status) {
  //         console.log(results[0].geometry.location)
  //         var marker = new google.maps.Marker({
  //           map: map,
  //           position: results[0].geometry.location
  //         });
  //         var infowindow = new google.maps.InfoWindow({
  //           content: '<p>Marker Location:' + marker.getPosition() + '</p>'
  //         });
  //       });
  //
  //     }
  //   })
