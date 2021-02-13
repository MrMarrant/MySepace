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

// // Update a Article by the id in the request
// exports.update = (req, res) => {

//     const id = req.params.id;

//     Article.update(req.body, {
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Article was updated successfully."
//           });
//         } else {
//           res.send({
//             message: `Cannot update Article with id=${id}. Maybe Article was not found or req.body is empty!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Error updating Article with id=" + id
//         });
//       });
// };

// // Delete a Article with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;

//     Article.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Article was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Article with id=${id}. Maybe Article was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Article with id=" + id
//         });
//       });
// };

// // Delete all Articles from the database.
// exports.deleteAll = (req, res) => {
//     Article.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} Articles were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all Articles."
//           });
//         });
// };

// // Find all published Articles
// exports.findAllPublished = (req, res) => {
//     Article.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Articles."
//       });
//     });
//  };