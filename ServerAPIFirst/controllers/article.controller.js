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
          message: "Erreur sur la recherche de l'article avec id=" + id
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
            message: "Article correctement update."
          });
        } else {
          res.send({
            message: `Impossible d'update l'Article avec id=${id}. Article non trouvé ?`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Une erreur est survenue dans l'update de l'Article avec id=" + id
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
            message: "L'Article a été correctement supprimé"
          });
        } else {
          res.send({
            message: `Impossible de supprimer l'article avec id=${id}. Article non trouvé ?`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Impossible de supprimer l'Article avec id=" + id
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
          res.send({ message: `${nums} Tout les Articles ont été supprimé avec succès` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Des erreurs sont survenue en essayant de supprimer les articles"
          });
        });
};
