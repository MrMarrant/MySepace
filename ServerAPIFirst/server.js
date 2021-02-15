const express = require('express')
const bodyParser = require("body-parser");


const app = express()

let PORT = 1337;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
});

require("./routes/article.routes.js")(app);
app.listen(PORT, () => {
    console.log("Serveur Article à l'écoute")
})