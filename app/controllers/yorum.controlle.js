const db = require("../models");
const Yorum = db.yorum;

 exports.create = (req, res) => {
   if (!req.body.burcadi) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const yorumlar = new Yorum({
    burcadi: req.body.burcadi,
    burclinki: req.body.burclinki,
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
  const burcadi = req.query.burcadi;
  var condition = burcadi ? { burcadi: { $regex: new RegExp(burcadi), $options: "i" } } : {};

  Yorum.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Yorum."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Yorum.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Yorum with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Yorum with id=" + id });
    });
};

// Update a Yorum by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Yorum.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Yorum with id=${id}. Maybe Yorum was not found!`
        });
      } else res.send({ message: "Yorum was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Yorum with id=" + id
      });
    });
};

// Delete a Yorum with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Yorum.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Yorum with id=${id}. Maybe Yorum was not found!`
        });
      } else {
        res.send({
          message: "Yorum was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Yorum with id=" + id
      });
    });
};

// Delete all Yorum from the database.
exports.deleteAll = (req, res) => {
  Yorum.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Yorum were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Yorum."
      });
    });
};

// Find all published Yorum
exports.findAllPublished = (req, res) => {
  Yorum.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Yorum."
      });
    });
};
