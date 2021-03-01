const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const mongoose = require('mongoose');

const app = express(); 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD"); 
  next();
}); 
mongoose
  .connect("mongodb+srv://vipfal:arYDbq29PRrYeX4K@cluster0.s2k8p.mongodb.net/vipfal_DB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "VipFal Server Aktif" });
});

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
const Role = db.role;
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/turorial.routes")(app);
require("./app/routes/burclar.routes")(app);
require("./app/routes/indirim.routers")(app);
const fileRoutes = require('./app/routes/file-upload-routes');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/admin', fileRoutes.routes);
app.use(cors());

// set port, listen for requests
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });



      new Role({
        name: "falci"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'falci' to roles collection");
      });




    }


  });
}
