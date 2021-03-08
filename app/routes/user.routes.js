const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
//let User = require("../models/user.model");
var bcrypt = require("bcryptjs");
var router = require("express").Router();
const db = require("../models");
const User = db.user;
const Role = db.role;




module.exports = function(app) {
  app.use(function(req, res, next) {
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

  app.route("/api/tumusergetir").get( (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch( err => res.status(400).json("Error: " + err) );
});


 
app.route("/api/usergetir/:id").get( (req, res) => {
  User.findById(req.params.id)
  .then(users => res.json(

    users.username
    
    ))
  .catch( err => res.status(400).json("Error: " + err) );
});

app.route('/api/usersil/:id').delete((req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id)
      .then(() => res.json('user deleted:' + id))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/api/userupdate/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
        user.username=req.body.username;
        user.email=req.body.email,
        user.password=req.body.password,
        user.iban= req.body.iban,
        user.cuzdan= req.body.cuzdan,
        user.falbilgisi=req.body.falbilgisi,
        user.indirimkodu=req.body.indirimkodu,
        user.resimyolu=req.body.resimyolu,
        user.profilyazisi=req.body.profilyazisi,
        user.yorumlar=req.body.yorumlar,
        user.yorumsayisi=req.body.yorumsayisi,
        user.yediYirmidort=req.body.yediYirmidort,
        user.baktigiFalid=req.body.baktigiFalid,
        user.baktigiFalAdi=req.body.baktigiFalAdi,
        user.baktigiFalUcreti=req.body.baktigiFalUcreti,
        user.kazandigiKar=req.body.kazandigiKar,
        user.adminFalciyaYorumlari=req.body.adminFalciyaYorumlari,
        user.yaziliFalFiyat=req.body.yaziliFalFiyat,
        user.canlifalFiyati=req.body.canlifalFiyati,
        user.FalciRutbesi=req.body.FalciRutbesi,
        user.KahveFaliSayisi=req.body.KahveFaliSayisi

        User.save()
              .then(() => res.json('kullanici updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/api/adminupdate/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
        user.username=req.body.username;
        user.email=req.body.email,
        user.password=req.body.password,
        user.iban= req.body.iban,
        user.cuzdan= req.body.cuzdan,
        user.falbilgisi=req.body.falbilgisi,
        user.indirimkodu=req.body.indirimkodu,
        user.resimyolu=req.body.resimyolu,
        user.profilyazisi=req.body.profilyazisi,
        user.yorumlar=req.body.yorumlar,
        user.yorumsayisi=req.body.yorumsayisi,
        user.yediYirmidort=req.body.yediYirmidort,
        user.baktigiFalid=req.body.baktigiFalid,
        user.baktigiFalAdi=req.body.baktigiFalAdi,
        user.baktigiFalUcreti=req.body.baktigiFalUcreti,
        user.kazandigiKar=req.body.kazandigiKar,
        user.adminFalciyaYorumlari=req.body.adminFalciyaYorumlari,
        user.yaziliFalFiyat=req.body.yaziliFalFiyat,
        user.canlifalFiyati=req.body.canlifalFiyati,
        user.FalciRutbesi=req.body.FalciRutbesi,
        user.KahveFaliSayisi=req.body.KahveFaliSayisi

        User.save()
              .then(() => res.json('kullanici updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/api/Falciupdate/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
        user.username=req.body.username;
        user.email=req.body.email,
        user.password=req.body.password,
        user.iban= req.body.iban,
        user.cuzdan= req.body.cuzdan,
        user.falbilgisi=req.body.falbilgisi,
        user.indirimkodu=req.body.indirimkodu,
        user.resimyolu=req.body.resimyolu,
        user.profilyazisi=req.body.profilyazisi,
        user.yorumlar=req.body.yorumlar,
        user.yorumsayisi=req.body.yorumsayisi,
        user.yediYirmidort=req.body.yediYirmidort,
        user.baktigiFalid=req.body.baktigiFalid,
        user.baktigiFalAdi=req.body.baktigiFalAdi,
        user.baktigiFalUcreti=req.body.baktigiFalUcreti,
        user.kazandigiKar=req.body.kazandigiKar,
        user.adminFalciyaYorumlari=req.body.adminFalciyaYorumlari,
        user.yaziliFalFiyat=req.body.yaziliFalFiyat,
        user.canlifalFiyati=req.body.canlifalFiyati,
        user.FalciRutbesi=req.body.FalciRutbesi,
        user.KahveFaliSayisi=req.body.KahveFaliSayisi

        User.save()
              .then(() => res.json('falci updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});
 
router.route('/api/Modupdate/:id').post((req, res) => {
  User.findById(req.params.id)
      .then(user => {
        user.username=req.body.username;
        user.email=req.body.email,
        user.password=req.body.password,
        user.iban= req.body.iban,
        user.cuzdan= req.body.cuzdan,
        user.falbilgisi=req.body.falbilgisi,
        user.indirimkodu=req.body.indirimkodu,
        user.resimyolu=req.body.resimyolu,
        user.profilyazisi=req.body.profilyazisi,
        user.yorumlar=req.body.yorumlar,
        user.yorumsayisi=req.body.yorumsayisi,
        user.yediYirmidort=req.body.yediYirmidort,
        user.baktigiFalid=req.body.baktigiFalid,
        user.baktigiFalAdi=req.body.baktigiFalAdi,
        user.baktigiFalUcreti=req.body.baktigiFalUcreti,
        user.kazandigiKar=req.body.kazandigiKar,
        user.adminFalciyaYorumlari=req.body.adminFalciyaYorumlari,
        user.yaziliFalFiyat=req.body.yaziliFalFiyat,
        user.canlifalFiyati=req.body.canlifalFiyati,
        user.FalciRutbesi=req.body.FalciRutbesi,
        user.KahveFaliSayisi=req.body.KahveFaliSayisi

        User.save()
              .then(() => res.json('kullanici updated!'))
              .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
});

app.post("/api/admin/modekle", function (req, res) {

  let user = new User({
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


  user.save(function(err){
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
          role._id="60298f789540180016ee791b";
          user.roles = roles.map(role =>role._id);
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

          res.send({ message: "mod was registered successfully!" });
        });
      });
    }  
});
});

app.post("/api/admin/userekle", function (req, res) {

  let user = new User({
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


  user.save(function(err){
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
          role._id="60298f789540180016ee791a";
          user.roles = roles.map(role =>role._id);
          user.save(err => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }

            res.send({ message: "User was registered successfully!" });
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

          res.send({ message: "User was registered successfully!" });
        });
      });
    }  
});
});


app.post("/api/admin/adminekle", function (req, res) {

  let user = new User({
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


  user.save(function(err){
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
          role._id="60298f789540180016ee791c";
          user.roles = roles.map(role =>role._id);
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

          res.send({ message: "admin was registered successfully!" });
        });
      });
    }  
});
});

app.post("/api/admin/falciekle", function (req, res) {

  let user = new User({
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


  user.save(function(err){
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
          role._id="60298f789540180016ee791d";
          user.roles = roles.map(role =>role._id);
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

          res.send({ message: "falci was registered successfully!" });
        });
      });
    }  
});
});
 

app.route("/api/adminrolesgetir").get( (req, res) => {

  User.find({roles:"60298f789540180016ee791c"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json("Error: " + err) );
});

app.route("/api/userrolesgetir").get( (req, res) => {

  User.find({roles:"60298f789540180016ee791a"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json("Error: " + err) );
});

app.route("/api/modrolesgetir").get( (req, res) => {

  User.find({roles:"60298f789540180016ee791b"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json("Error: " + err) );
});
 
app.route("/api/falcirolesgetir").get( (req, res) => {

  User.find({roles:"60298f789540180016ee791d"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json("Error: " + err) );
});

 



};
