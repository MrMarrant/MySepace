module.exports = app => {
    const commentaires = require("../controllers/commentaire.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouveau commentaire
    router.post("/", commentaires.create);
  
    // Affiche tout les commentaires
    router.get("/", commentaires.findAll);

    router.get("/:id", commentaires.findAllByIdArticle);
  
    // // Retrieve all published articles
    // router.get("/published", articles.findAllPublished);
  
    // // Retrieve a single Tutorial with id
    // router.get("/:id", articles.findOne);
  
    // // Update a Tutorial with id
    // router.put("/:id", articles.update);
  
    // // Delete a Tutorial with id
    // router.delete("/:id", articles.delete);
  
    // // Delete all articles
    // router.delete("/", articles.deleteAll);
  
    app.use('/api/commentaires', router);
  };