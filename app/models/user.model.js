const mongoose = require("mongoose");
var schema ;
const User = mongoose.model(
  "User",
   schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    iban: String,
    cuzdan: String,
    dogumtarihi:String,
    phone:String,
    falbilgisi:String,
    indirimkodu: String,
    resimyolu: String,
    profilyazisi: String,
    yorumlar: String,
    yorumsayisi: String,
    Falciyetkisi: String,
    yediYirmidort: String,
    baktigiFalid: String,
    baktigiFalAdi: String,
    baktigiFalUcreti: String,
    kazandigiKar: String,
    adminFalciyaYorumlari:String,
    yaziliFalFiyat:String,
    canlifalFiyati:String,
    FalciRutbesi:String,
    KahveFaliSayisi:String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  }).method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  })  
);

module.exports = User;
