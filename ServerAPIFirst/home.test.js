const express = require('express');
const request = require('supertest');
const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

describe('Articles RESTful API', () => {

    it('should return 200', (done) => {

        // require("./routes/article.routes.js")(app);
        request(app)
            .get('http://localhost:1337/api/articles')
            .expect(200, [
                {
                    id: 'abcdef',
                    title: 'Holidays'
                }
            ], done);

    });
    
});