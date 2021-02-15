module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();
  router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    var corsOptions = {
      origin: 'https://vipfal.herokuapp.com/',
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

    router.use(cors(corsOptions))

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);

    app.use("/admin/tutorials", router);
    next();
  });
};
