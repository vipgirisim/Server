const mongoose = require("mongoose");

const Yorum = mongoose.model(
  "Yorum",
  new mongoose.Schema({
    username: String,
    email: String,
    yorumyapan: String,
    yorum: String,
    yorumyapilankullanici: String,  })
);

module.exports = Yorum;
