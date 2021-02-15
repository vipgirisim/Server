<<<<<<< HEAD
module.exports = app => {
<<<<<<< HEAD
=======
=======
  
   const cors = require("cors");
   var router = require("express").Router();

  var corsOptions = {
    origin: 'https://vipfal.herokuapp.com/admin/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

module.exports = app => {
 
  router.use(cors(corsOptions))
>>>>>>> 104a7de2929e3f85ac6fbf194ded24c6e806e1db
>>>>>>> 584b94e8da039ba4ba550425fd3a78f07b10ca6e
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

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
};
