const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
 var bcrypt = require("bcryptjs");
var router = require("express").Router();
const db = require("../models");
const User = db.user;
const Role = db.role;




module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  app.get(
    "/api/test/falci",
    [authJwt.verifyToken, authJwt.isFalci],
    controller.FalciBoard
  );

  app.get(
    "/api/test/yoneticifalci",
    [authJwt.verifyToken, authJwt.ishyfalcisi],
    controller.YFalciBoard
  );


  app.get(
    "/api/test/Havuzfalcisi",
    [authJwt.verifyToken, authJwt.isFalci],
    controller.HFalciBoard
  );

  app.route("/api/tumusergetir").get((req, res) => {

   User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));  
  });

  app.route("/api/kullaniciara").get((req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { $regex: new RegExp(username), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });

  });



  app.route("/api/usergetir/:id").get((req, res) => {
    User.findById(req.params.id)
      .then(users => res.json(

        users.username

      ))
      .catch(err => res.status(400).json("Error: " + err));
  });

  app.route('/api/usersil/:id').delete((req, res) => {
    let id = req.params.id;
    User.findByIdAndDelete(id)
      .then(() => res.json('user deleted:' + id))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  app.route('/api/hepsinisil').delete((req, res) => {
    User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} kullanici silindi were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
  });

   


 app.route('/api/userupdate/:id').put((req, res) => {
  let id = req.params.id;
   User.findByIdAndUpdate(
    id,
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      iban: req.body.iban,
      cuzdan: req.body.cuzdan,
      phone:req.body.phone,
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
      adminFalciyaYorumlari: req.body.adminFalciyaYorumlari,
      yaziliFalFiyat: req.body.yaziliFalFiyat,
      canlifalFiyati: req.body.canlifalFiyati,
      FalciRutbesi: req.body.FalciRutbesi,
      KahveFaliSayisi: req.body.KahveFaliSayisi
    },
    { new: true }
  ).select('-__v')
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: "Error -> Can NOT update a customer with id = " + req.params.id,
          error: "Not Found!"
        });
      }

      res.status(200).json(user);
    }).catch(err => {
      return res.status(500).send({
        message: "Error -> Can not update a customer with id = " + req.params.id,
        error: err.message
      });
    });
});



 
app.post("/api/admin/modekle", function (req, res) {

  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    iban: req.body.iban,
    cuzdan: req.body.cuzdan,
    phone:req.body.phone,
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
    adminFalciyaYorumlari: req.body.adminFalciyaYorumlari,
    yaziliFalFiyat: req.body.yaziliFalFiyat,
    canlifalFiyati: req.body.canlifalFiyati,
    FalciRutbesi: req.body.FalciRutbesi,
    KahveFaliSayisi: req.body.KahveFaliSayisi
  });


  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          role._id = "60298f789540180016ee791b";
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "mod was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "moderator" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "mod was registered successfully!" });
        });
      });
    }
  });
});

app.post("/api/admin/userekle", function (req, res) {

  let user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    iban: req.body.iban,
    cuzdan: req.body.cuzdan,
    phone:req.body.phone,
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
    adminFalciyaYorumlari: req.body.adminFalciyaYorumlari,
    yaziliFalFiyat: req.body.yaziliFalFiyat,
    canlifalFiyati: req.body.canlifalFiyati,
    FalciRutbesi: req.body.FalciRutbesi,
    KahveFaliSayisi: req.body.KahveFaliSayisi
  });


  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          role._id = "60298f789540180016ee791a";
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "Usera was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Usera was registered successfully!" });
        });
      });
    }
  });
});


app.post("/api/admin/adminekle", function (req, res) {

  let user = new User({
     username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    iban: req.body.iban,
    cuzdan: req.body.cuzdan,
    phone:req.body.phone,
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
    adminFalciyaYorumlari: req.body.adminFalciyaYorumlari,
    yaziliFalFiyat: req.body.yaziliFalFiyat,
    canlifalFiyati: req.body.canlifalFiyati,
    FalciRutbesi: req.body.FalciRutbesi,
    KahveFaliSayisi: req.body.KahveFaliSayisi
  });


  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
 
    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          role._id = "60298f789540180016ee791c";
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "admin was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "admin" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "admin was registered successfully!" });
        });
      });
    }  
  });
});

app.post("/api/admin/falciekle", function (req, res) {

  let user = new User({
    username: req.body.username,
    profilyazisi: req.body.profilyazisi,
    email: req.body.email,
    password:bcrypt.hashSync(req.body.password, 8),
    phone:req.body.phone,
    iban: req.body.iban,
    FalciRutbesi: req.body.FalciRutbesi, 
    yediYirmidort: req.body.yediYirmidort,
    falcirutbe:req.body.Falciyetkisi,
    kazandigiKar: req.body.kazandigiKar,
    yaziliFalFiyat: req.body.yaziliFalFiyat,
    canlifalFiyati: req.body.canlifalFiyati,
    KahveFaliSayisi: req.body.KahveFaliSayisi,
 
  });


  user.save(function (err) {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find(
        {
          name: { $in: req.body.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          role._id = "60298f789540180016ee791d";
          user.roles = roles.map(role => role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "falci was registered successfully!" });
          });
        }
      );
    } else {
      Role.findOne({ name: "falci" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = [role._id];
        user.save(err => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "falci was registered successfully!" });
        });
      });
    }
  });
});


app.route("/api/adminrolesgetir").get((req, res) => {

  User.find({ roles: "60298f789540180016ee791c" })
    .then(users => res.json(

      users

    ))
    .catch(err => res.status(400).json("Error: " + err));
});

app.route("/api/userrolesgetir").get((req, res) => {

  User.find({ roles: "60298f789540180016ee791a" })
    .then(users => res.json(

      users

    ))
    .catch(err => res.status(400).json("Error: " + err));
});

app.route("/api/modrolesgetir").get((req, res) => {

  User.find({ roles: "60298f789540180016ee791b" })
    .then(users => res.json(

      users

    ))
    .catch(err => res.status(400).json("Error: " + err));
});

app.route("/api/falcirolesgetir").get((req, res) => {

  User.find({ roles: "60298f789540180016ee791d" })
    .then(users => res.json(

      users

    ))
    .catch(err => res.status(400).json("Error: " + err));
});

 



};
