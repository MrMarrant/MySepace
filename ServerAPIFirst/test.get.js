const request = require('supertest');
const express = require('express');

const app = express();

app.get('http://localhost:1337/api/articles', function(req, res) {
  res.status(200).json({ name: 'john' });
});

request(app)
  .get('http://localhost:1337/api/articles')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });