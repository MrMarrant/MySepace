const express = require('express')
const app = express()

app.use(express.json())

app.get('/', function (req, res){

    res.setHeader('Content-Type','text/html');
    res.status(200).send('<h1> Yo, vous etes sur le serveur API de MySpace </h1>');
});

app.listen(8080, () => {
    console.log("Serveur à l'écoute")
})