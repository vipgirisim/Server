const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model");
db.role = require("./role.model");
db.burclar = require("./burclar.model");

db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;
