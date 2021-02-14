module.exports = app => {
    const commentaires = require("../controllers/commentaire.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouveau commentaire
    router.post("/", commentaires.create);
  
    // Affiche tout les commentaires
    router.get("/", commentaires.findAll);

    router.get("/:id", commentaires.findAllByIdArticle);

    router.delete("/:id", commentaires.delete);
  
    app.use('/api/commentaires', router);
  };