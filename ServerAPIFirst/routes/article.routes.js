module.exports = app => {
    const articles = require("../controllers/article.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", articles.create);
  
    // Retrieve all articles
    router.get("/", articles.findAll);
  
    // Retrieve all published articles
    router.get("/published", articles.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", articles.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", articles.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", articles.delete);
  
    // Delete all articles
    router.delete("/", articles.deleteAll);
  
    app.use('/api/articles', router);
  };