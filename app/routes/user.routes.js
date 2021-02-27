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

  app.route('/api/usergetir').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' +err));
});
};
