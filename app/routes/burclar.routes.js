const burclar = require("../controllers/burclar.controller.js");
module.exports = app => {


  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", burclar.create);

  // Retrieve all Tutorials
  router.get("/", burclar.findAll);
 

  // Retrieve a single Tutorial with id
  router.get("/:id", burclar.findOne);

  // Update a Tutorial with id
  router.post("/:id", burclar.update);

  // Delete a Tutorial with id
  router.delete("/:id", burclar.delete);

  // Create a new Tutorial
  router.delete("/", burclar.deleteAll);

  app.use("/admin/burclar", router);
};
