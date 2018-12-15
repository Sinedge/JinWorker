'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    default: null,
  },
  guid: {
    type: String,
    default: null,
  },
  pubDate: {
    type: Date,
    default: Date.now
  },
  link: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  video: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model('Articles', ArticleSchema);