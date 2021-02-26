const discounts = require("../controllers/Indirim.controller");
module.exports = app => {


  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", discounts.create);

  // Retrieve all Tutorials
  router.get("/", discounts.findAll);
 

  // Retrieve a single Tutorial with id
  router.get("/:id", discounts.findOne);

  // Update a Tutorial with id
  router.post("/:id", discounts.update);

  // Delete a Tutorial with id
  router.delete("/:id", discounts.delete);

  // Create a new Tutorial
  router.delete("/", discounts.deleteAll);

  app.use("/admin/discounts", router);
};
