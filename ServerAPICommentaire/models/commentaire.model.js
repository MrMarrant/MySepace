module.exports = (sequelize, Sequelize) => {
    const Commentaire = sequelize.define("commentaire", {
      contenu: {
        type: Sequelize.STRING
      },
      auteur: {
        type: Sequelize.STRING
      },
      iDArticle: {
        type: Sequelize.INTEGER, 
        allowNull: false 
      }
    });
  
    return Commentaire;
  };