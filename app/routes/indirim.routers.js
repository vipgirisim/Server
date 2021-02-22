const Indirim = require("../controllers/Indirim.controller.js");
module.exports = app => {


  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", Indirim.create);

  // Retrieve all Tutorials
  router.get("/", Indirim.findAll);
 

  // Retrieve a single Tutorial with id
  router.get("/:id", Indirim.findOne);

  // Update a Tutorial with id
  router.put("/:id", Indirim.update);

  // Delete a Tutorial with id
  router.delete("/:id", Indirim.delete);

  // Create a new Tutorial
  router.delete("/", Indirim.deleteAll);

  app.use("/admin/indirim", router);
};
