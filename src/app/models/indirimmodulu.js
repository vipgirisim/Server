const mongoose = require("mongoose");

const indirim = mongoose.model(
  "indirim",
  new mongoose.Schema({
    kackisikullanacak:String,
    yuzdeorani:String,
    sonkullanmatarihi:String,
    kackerekullanilacak:String,
    email: String, 
     
  })
);

module.exports = indirim;
