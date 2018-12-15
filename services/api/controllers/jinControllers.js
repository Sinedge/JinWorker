'use strict';

const mongoose = require('mongoose'), 
Articles = mongoose.model('Articles');

exports.addArticles = (req, res) => {
  let articles = [];
  try {
      if (req.body && req.body.items) {
        articles = req.body.items.map(async (item) => {
          const new_article = new Articles(item);
          await new_article.save((err, elem) => {
            if (err) {
              res.send(err);
            }
            return elem;
          });
        });
      }
    res.json(articles);
  } catch (e) {
    console.warn(e);
    return [];
  }
};

exports.ping = (req, res) => {
  res.json({ message: 'It\'s me! MARIO !!!!' });
};

exports.findOne = (req, res) => {
  Articles.findOne({ guid: req.body.guid }, (err, r) => {
    if (err) {
      res.send(err);
    }
    res.json(r);
  });
};