module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("article", {
      titre: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    });
  
    return Article;
  };