const db = require("../models");
const Yorumlar = db.yorumlar;

 exports.create = (req, res) => {
   if (!req.body.yorum) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const yorumlar = new Yorumlar({ 

    username: req.body.username,
    email: req.body.email,
    yorumyapan: req.body.yorumyapan,
    yorum: req.body.yorum,
    yorumyapilankullanici: req.body.yorumyapilankullanici
   });

   yorumlar
    .save(yorumlar)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Yorum"
      });
    });
};

 exports.findAll = (req, res) => {
  const yorum = req.query.yorum;
  var condition = yorum ? { yorum: { $regex: new RegExp(yorum), $options: "i" } } : {};

  Yorumlar.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Yorumlar."
      });
    });
};  

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Yorumlar.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Yorumlar with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Yorumlar with id=" + id });
    });
};

// Update a Yorumlar by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Yorumlar.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Yorumlar with id=${id}. Maybe Yorumlar was not found!`
        });
      } else res.send({ message: "Yorumlar was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Yorumlar with id=" + id
      });
    });
};

// Delete a Yorumlar with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Yorumlar.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Yorumlar with id=${id}. Maybe Yorumlar was not found!`
        });
      } else {
        res.send({
          message: "Yorumlar was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Yorumlar with id=" + id
      });
    });
};

// Delete all Yorumlar from the database.
exports.deleteAll = (req, res) => {
  Yorumlar.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Yorumlar were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Yorumlar."
      });
    });
};

// Find all published Yorumlar
exports.findAllPublished = (req, res) => {
  Yorumlar.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving burclar."
      });
    });
};
