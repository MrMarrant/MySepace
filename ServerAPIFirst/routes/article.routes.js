module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouvel Article
    router.post("/", articles.create);
  
    // Affiche tout les articles
    router.get("/", articles.findAll);
  
    // Affiche tout les articles "publié"
    router.get("/published", articles.findAllPublished);
  
    // Affiche un Article en fonction de son id
    router.get("/:id", articles.findOne);
  
    // Update un article en fonction de son id
    router.put("/:id", articles.update);
  
    // Delete un article en fonction de son id
    router.delete("/:id", articles.delete);
  
    // Delete tout les articles
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  };