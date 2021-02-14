const db = require("../models");
const Article = db.articles;
const Op = db.Sequelize.Op;

// creer un nouvel article dans la bdd
exports.create = (req, res) => {
// Vérification
if (!req.body.titre || !req.body.description) {
    res.status(400).send({
        message: "Le contenu ne peut être vide"
    });
    return;
}


const article = {
    titre: req.body.titre,
    description: req.body.description
};
Article.create(article)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Des erreurs sont survenu durant la création de l'article"
    });
    });
};

// affiche tout les articles
exports.findAll = (req, res) => {
    const titre = req.query.titre;
    var condition = titre ? { titre: { [Op.like]: `%${titre}%` } } : null;
  
    Article.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Des erreurs sont survenu durant l'affichage des article"
        });
      });
};

// Cherche un article en fonction d'un id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Article.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Article with id=" + id
        });
      });
};

// Update un Article
exports.update = (req, res) => {

    const id = req.params.id;

    Article.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Article was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Article with id=" + id
        });
      });
};

// Delete un Article
exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Article was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Article with id=" + id
        });
      });
};

// Delete tout les articles
exports.deleteAll = (req, res) => {
    Article.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Articles were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Articles."
          });
        });
};
