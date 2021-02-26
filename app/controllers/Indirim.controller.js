const db = require("../models");
const Indirim = db.indirims;
/*

     indirimkodu: String,
        kackisikullansin: String,
        yuzdeorani: String,
        baslangicTarihi: Date,
        BitisTarihi: Date,

*/
 exports.create = (req, res) => {
   if (!req.body.indirimkodu) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

   const indirim = new Indirim({ 
    indirimkodu:req.body.indirimkodu,
    kackisikullansin: req.body.kackisikullansin,
    yuzdeorani:req.body.yuzdeorani,
    baslangicTarihi:req.body.baslangicTarihi,
    BitisTarihi:req.body.BitisTarihi,  

   });

   indirim
    .save(indirim)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Indirim"
      });
    });
};

 exports.findAll = (req, res) => {
  const indirimkodu = req.query.indirimkodu;
  var condition = indirimkodu ? { indirimkodu: { $regex: new RegExp(indirimkodu), $options: "i" } } : {};

  Indirim.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Indirim."
      });
    });
};

 exports.findOne = (req, res) => {
  const id = req.params.id;

  Indirim.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Indirim with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Indirim with id=" + id });
    });
};

// Update a Indirim by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Indirim.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Indirim with id=${id}. Maybe Indirim was not found!`
        });
      } else res.send({ message: "Indirim was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Indirim with id=" + id
      });
    });
};

// Delete a Indirim with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Indirim.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Indirim with id=${id}. Maybe Indirim was not found!`
        });
      } else {
        res.send({
          message: "Indirim was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Indirim with id=" + id
      });
    });
};

// Delete all Indirim from the database.
exports.deleteAll = (req, res) => {
  Indirim.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Indirim were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Indirim."
      });
    });
};

// Find all published Indirim
exports.findAllPublished = (req, res) => {
  Indirim.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Indirim."
      });
    });
};
