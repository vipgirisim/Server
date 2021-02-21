const db = require("../models");
const Burclar = db.burclar;

// Create and Save a new burclar
exports.create = (req, res) => {
  // Validate request
  if (!req.body.burcadi) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a burclar
  const burclar = new Burclar({
    burcadi: req.body.burcadi,
    burclinki: req.body.burclinki,
   // published: req.body.published ? req.body.published : false
  });

  // Save burclar in the database
  burclar
    .save(burcadi)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the burclar"
      });
    });
};

// Retrieve all burclar from the database.
exports.findAll = (req, res) => {
  const burcadi = req.query.burcadi;
  var condition = burcadi ? { burcadi: { $regex: new RegExp(burcadi), $options: "i" } } : {};

  Burclar.find(condition)
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

// Find a single burclar with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Burclar.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found burclar with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving burclar with id=" + id });
    });
};

// Update a burclar by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Burclar.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update burclar with id=${id}. Maybe burclar was not found!`
        });
      } else res.send({ message: "burclar was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating burclar with id=" + id
      });
    });
};

// Delete a burclar with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Burclar.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete burclar with id=${id}. Maybe burclar was not found!`
        });
      } else {
        res.send({
          message: "burclar was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete burclar with id=" + id
      });
    });
};

// Delete all burclar from the database.
exports.deleteAll = (req, res) => {
  Burclar.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} burclar were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all burclar."
      });
    });
};

// Find all published burclar
exports.findAllPublished = (req, res) => {
  Burclar.find({ published: true })
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
