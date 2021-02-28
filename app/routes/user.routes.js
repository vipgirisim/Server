const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
let User = require('../models/user.model');

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


app.post('/api/userekle', function (req, res) {

  let user = new User();
  user.username= req.body.username;
  user.email= req.body.email;
  user.password= req.body.
  user.iban= req.body.iban;
  user.cuzdan= req.body.cuzdan;
  user.falbilgisi= req.body.falbilgisi;
  user.indirimkodu= req.body.indirimkodu;
  user.resimyolu= req.body.resimyolu;
  user.profilyazisi= req.body.profilyazisi;
  user.yorumlar= req.body.yorumlar;
  user.yorumsayisi= req.body.yorumsayisi;
  user.yediYirmidort= req.body.yediYirmidort;
  user.baktigiFalid= req.body.baktigiFalid;
  user.baktigiFalAdi= req.body.baktigiFalAdi;
  user.baktigiFalUcreti= req.body.baktigiFalUcreti;
  user.kazandigiKar= req.body.kazandigiKar;
  user.adminFalciyaYorumlari=req.body.adminFalciyaYorumlari;
  user.yaziliFalFiyat=req.body.yaziliFalFiyat;
  user.canlifalFiyati=req.body.canlifalFiyati;
  user.FalciRutbesi=req.body.FalciRutbesi;
  user.KahveFaliSayisi=req.body.KahveFaliSayisi;

  user.save(function(err){
      if(err){
          console.log(err);
          res.json({msg: "failed"})
      }
      else{
          res.json(user)
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
