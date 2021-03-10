module.exports = app => {
  const yorumlar = require("../controllers/yorum.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", yorumlar.create);

  // Retrieve all yorumlar
  router.get("/", yorumlar.findAll);

  // Retrieve all published yorumlar
  router.get("/published", yorumlar.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", yorumlar.findOne);

  // Update a Tutorial with id
  router.post("/:id", yorumlar.update);

  // Delete a Tutorial with id
  router.delete("/:id", yorumlar.delete);

  // Create a new Tutorial
  router.delete("/", yorumlar.deleteAll);




  

   app.use("/admin/yorumlar", router);
};
