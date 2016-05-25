'use strict';

var mongoose = require('mongoose');

var housesSchema = new mongoose.Schema({
  address: String,
  sqft: Number,
  lotSize: Number,
  bedrooms: Number,
  baths: Number,
  elementary: String,
  ms: String,
  hs: String,
  status: String,
  pics: [],
  mapPics: String
});

module.exports = mongoose.model('Houses', housesSchema);
