const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model");
db.role = require("./role.model");
db.burclar = require("./burclar.model.js")(mongoose);
db.tutorials = require("./tutorial.model.js")(mongoose);
db.indirims = require("./indirim.model.js")(mongoose);
db.singlefile = require("./singlefile.js")(mongoose);
db.multiplefile = require("./multiplefile.js")(mongoose);


module.exports = db;
