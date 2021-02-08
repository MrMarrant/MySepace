const express = require('express')
const bodyParser = require("body-parser");


const app = express()

let PORT = 8080;


// app.use(express.json())

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.sequelize.sync();


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'database_development'
// });
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected!');
// });



// app.get('/', function (req, res){

//     res.setHeader('Content-Type','text/html');
//     res.status(200).send('<h1> Yo, vous etes sur le serveur API de MySpace </h1>');
// });


// app.get('/:id', function (req, res){

//     console.log("paramaètre sensé être wehs : " + req.params.id);

//     connection.query('SELECT id FROM Users WHERE username ='+req.params.id, (err,rows) => {
//         if(err) throw err;
    
//         console.log('Data received from Db:');
//         console.log(rows);

//         res.setHeader('Content-Type','text/html');
//         res.status(200).send('<h1> Voici le résultat de la requete : </h1>');
//     });

    
// });
require("./routes/article.routes.js")(app);
app.listen(PORT, () => {
    console.log("Serveur à l'écoute")
})