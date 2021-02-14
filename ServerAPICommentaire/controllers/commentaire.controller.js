const db = require("../models");
const Commentaire = db.commentaires;
const Op = db.Sequelize.Op;

// Create and Save a new Article
exports.create = (req, res) => {
// Validate request
if (!req.body.contenu || !req.body.auteur || !req.body.iDArticle) {
    res.status(400).send({
        message: "Le contenu ne peut être vide",
    });
    return;
}


  // Create 
const commentaire = {
  contenu: req.body.contenu,
  auteur: req.body.auteur,
  iDArticle: req.body.iDArticle
};
  // Save in the database
Commentaire.create(commentaire)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Des erreurs sont survenu durant la création du commentaire"
    });
    });
};

// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
    const auteur = req.query.auteur;
    var condition = auteur ? { auteur: { [Op.like]: `%${auteur}%` } } : null;
  
    Commentaire.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Des erreurs sont survenu durant l'affichage des commentaires"
        });
      });
};

// Trouve les Commentaires en fonction de l'id 
exports.findAllByIdArticle = (req, res) => {
    const id = req.params.id;

    Commentaire.findAll({where: { iDArticle: id }})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Une erreur est survenue avec la route findAllByIdArticle avec iDArticle=" + id
        });
      });
};

// Delete un commentaire
exports.delete = (req, res) => {
  const id = req.params.id;

  Commentaire.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Commentaire a été supprimé"
        });
      } else {
        res.send({
          message: `Impossible de supprimer le commentaire avec l'id=${id}.Commentaire non trouvé`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer le commentaire avec id=" + id
      });
    });
};