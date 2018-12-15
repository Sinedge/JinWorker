'use strict';
module.exports = function(app) {
  var jin = require('../controllers/jinControllers');

  app.route('/ping')
    .get(jin.ping);

  app.route('/articles')
    .post(jin.addArticles);

  app.route('/findArticle')
    .post(jin.findOne);
};
