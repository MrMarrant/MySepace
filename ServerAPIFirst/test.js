const express = require('express')
const bodyParser = require("body-parser");


const app = express()


require("./routes/article.routes.js")(app);


const serverRoutes = require("./routes/article.routes.js");
const request = require("supertest");

app.use("/api/articles", serverRoutes);


app.use(bodyParser.json());


describe("get all articles", () => {
    it("GET /articles - success", async () => {
        request(app).get("/api/articles")
            .expect(200)
            .end(function (err, res) {
                if (err) throw err;
            });
    });
});


describe("post one article", () => {
    it("Post /articles - success", async () => {
        let article = {
            titre: "sddss",
            description: "sddddd",
        };
        request(app).post("/api/articles")
            .send(article)
    });
});