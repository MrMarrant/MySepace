const express = require('express')
const bodyParser = require("body-parser");


const app = express()

let PORT = 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();

require("./routes/commentaire.routes.js")(app);
app.listen(PORT, () => {
    console.log("Serveur Commentaire à l'écoute")
})