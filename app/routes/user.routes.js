const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
//let User = require('../models/user.model');
var bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;
const Role = db.role;
module.exports = function(app) {
  app.use(function(req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
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

  app.route('/api/tumusergetir').get( (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch( err => res.status(400).json('Error: ' + err) );
});




app.route('/api/usergetir/:id').get( (req, res) => {
  User.findById(req.params.id)
  .then(users => res.json(

    users.username
    
    ))
  .catch( err => res.status(400).json('Error: ' + err) );
});
 

app.post('/api/admin/modekle', function (req, res) {

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

app.post('/api/admin/userekle', function (req, res) {

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


app.post('/api/admin/adminekle', function (req, res) {

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

app.post('/api/admin/falciekle', function (req, res) {

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




app.route('/api/adminrolesgetir').get( (req, res) => {

  User.find({roles:"60298f789540180016ee791c"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json('Error: ' + err) );
});

app.route('/api/userrolesgetir').get( (req, res) => {

  User.find({roles:"60298f789540180016ee791a"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json('Error: ' + err) );
});

app.route('/api/modrolesgetir').get( (req, res) => {

  User.find({roles:"60298f789540180016ee791b"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json('Error: ' + err) );
});

app.route('/api/falcirolesgetir').get( (req, res) => {

  User.find({roles:"60298f789540180016ee791d"})
  .then(users => res.json(

   users
    
    ))
  .catch( err => res.status(400).json('Error: ' + err) );
});

 



};
