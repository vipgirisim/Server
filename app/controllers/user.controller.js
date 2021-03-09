
const Users = require("../controllers/user.controller");
const db = require("../models");
const Kullanicilar = db.users;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
exports.FalciBoard = (req, res) => {
  res.status(200).send("Falci Content.");


 
};

 /*
exports.create = (req, res) => {
  if (!req.body.username) {
   res.status(400).send({ message: "Content can not be empty!" });
   return;
 }

  const users = new Kullanicilar({
  
    username:req.body.username,
    email:req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    iban: req.body.iban,
    cuzdan: req.body.cuzdan,
    falbilgisi: req.body.falbilgisi,
    indirimkodu: req.body.indirimkodu,
    resimyolu: req.body.resimyolu,
    profilyazisi: req.body.profilyazisi,
    yorumlar: req.body.yorumlar,
    yorumsayisi: req.body.yorumsayisi,
    yediYirmidort: req.body.yediYirmidort,
    baktigiFalid: req.body.baktigiFalid,
    baktigiFalAdi: req.body.baktigiFalAdi,
    baktigiFalUcreti: req.body.baktigiFalUcreti,
    kazandigiKar: req.body.kazandigiKar,
    adminFalciyaYorumlari:req.body.adminFalciyaYorumlari,
    yaziliFalFiyat:req.body.yaziliFalFiyat,
    canlifalFiyati:req.body.canlifalFiyati,
    FalciRutbesi:req.body.FalciRutbesi,
    KahveFaliSayisi:req.body.KahveFaliSayisi


  });

  users
   .save(users)
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

};*/