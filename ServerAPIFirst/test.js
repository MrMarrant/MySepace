const express = require("express"); // import express
const serverRoutes = require("./routes/article.routes.js"); //import file we are testing
const request = require("supertest"); // supertest is a framework that allows to easily test web apis
const app = express(); //an instance of an express app, a 'fake' express app
app.use("/api/articles", serverRoutes); //routes
describe("testing-server-routes", () => {
  it("GET /states - success", async () => {
    request(app).get("/") //uses the request function that calls on express app instance
        .expect(200)
        .end(function(err, res) {
            if (err) throw err;
          });
  });
});