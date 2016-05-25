'use strict';

require('dotenv');
var multer = require('multer');
var AWS = require('aws-sdk');

var fs = require('fs'),
    S3FS = require('s3fs'),
    s3fsImpl = new S3FS('overbrook-images', {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKe: process.env.AWS_SECRET_ACCESS_KEY
    })

var House = require(__dirname + '/../models/house-models');

// FOR POSTING TO MLAB
module.exports = (apiRouter) => {
  apiRouter.route('/addHomes')
  .post((req, res) => {
    var newHouse = new House(req.body);
    newHouse.save((err, house) => {
      console.log('NEWLY SAVED HOUSE IS : ', req.body.address);
      res.json(house);
    })
  })
  .get((req, res) => {
    House.find({}, (err, houses) => {
      if (err) throw err;
      res.json(houses);
    });
  })

  apiRouter.route('/addPics')
    .post((req, res) => {
      var body = [];
      req.on('data', function(chunk) {
        body.push(chunk)
      }).on('end', function() {
        console.log('JSON STRINGIFY BODY : ', JSON.stringify(body));
        body = Buffer.concat(body).toString();
        console.log('BODY IS : ', body);


            var s3 = new AWS.S3();
            var params = {
              Bucket: 'overbrook-images',
              // Key: process.env.AWS_ACCESS_KEY_ID,
              Key: 'h2432/testObjec',
              ACL: 'public-read-write',
              Body: JSON.stringify(body)
            }

            s3.putObject(params, function(err, data) {
              if (err) console.log(err, err.stack);
              else     console.log('POSTING TO S3 WITH THIS DATA', data);
              res.json(data);
            });







      })
      // var file = req.files.file;
      // var stream = fs.createReadStream(file.path);
      // return s3fsImpl.writeFile(file.originalFilename, stream).then(function () {
      //   fs.unlink(file.path, function(err) {
      //     if (err) console.log(err);
      //   })
      // })
    })

}


// fs.readFile(req.files.displayImage.path, function (err, data) {
//   var newPath = __dirname + "/uploads/uploadedFileName";
//   fs.writeFile(newPath, data, function (err) {
//     res.redirect("back");
//   });
// });






// POSTING TO S3
// module.exports = (apiRouter) => {
//   apiRouter.route('/addHomes')
//     .put((req, res) => {
//       console.log('REQ BODY : ', req.body);
//       var newHouse = new House(req.body);
//     var s3 = new AWS.S3();
//
//     var message = 'lucy the pug';
//
//     var params = {
//       Bucket: 'overbrook-completed',
//       // Key: process.env.AWS_ACCESS_KEY_ID,
//       Key: 'h2432/testObject',
//       ACL: 'public-read-write',
//       Body: JSON.stringify(newHouse)
//     }
//
//     s3.putObject(params, function(err, data) {
//       if (err) console.log(err, err.stack);
//       else     console.log('POSTING TO S3 WITH THIS DATA', data);
//       res.json(data);
//     });
//
// });
// }





// var params = {
//   Bucket: 'STRING_VALUE',
//   ACL: 'public-read-write',
// };
// s3.createBucket(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
