// file: user-route.js
var express = require('express');
const articles = require("../ServerAPIFirst/controllers/article.controller");

module.exports = function (app) {
    var route = express.Router();

  // Mount route as "/users"
  app.use('/api/articles', route);

  // Add a route that allows us to get a user by their username
  route.get('/', function (req, res) {
    var user = articles.findAll;

    if (!user) {
      res.status(404).json({
        status: 'not ok',
        data: null
      });
    } else {
      res.json({
        status: 'ok',
        data: user
      });
    }
  });
};