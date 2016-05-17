
var House = require(__dirname + '/../models/house-models');

module.exports = (apiRouter) => {
  apiRouter.route('/addHomes')
    .post((req, res) => {
      var newHouse = new House(req.body);
      newHouse.save((err, house) => {
        console.log('NEWLY SAVED HOUSE IS : ', house);
        res.json(house);
      })
    });
}
