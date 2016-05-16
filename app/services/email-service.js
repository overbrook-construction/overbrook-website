
// var nodeMailer = require('nodemailer');
// var smtpTransport = require('nodemailer-smtp-transport');
//
// var angular = require('angular');
//
// module.exports = function(ContactModule) {
//   app.factory('emailService', function() {
//     var transporter = nodeMailer.createTransport('smtps://info.overbrook@gmail.com:overbrook425@smtp.gmail.com');
//
//     var email = {};
//
//     email.sendEmail = function(user) {
//       console.log('SEND EMAIL FUNCTION HAS BEEN HIT');
//       var mailer = {};
//       var mailOptions = {
//         from: user.email,
//         to: '<heyduckd@gmail.com>',
//         sender: user.name,
//         subject: 'Email from Overbook contact form',
//         text: user.message
//       }
//       transporter.sendMail(mailOptions, function(error, info) {
//         console.log('TRANSPORTER SEND EMAIL');
//         if (error) return error;
//         console.log('INFO FROM SEND EMAIL : ', info);
//         // return mailer;
//       })
//     }
//     return email;
//   })
// }
