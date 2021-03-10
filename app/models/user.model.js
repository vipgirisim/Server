const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    iban: String,
    cuzdan: String,
    dogumtarihi:String,
    telefon:String,
    falbilgisi:String,
    indirimkodu: String,
    resimyolu: String,
    profilyazisi: String,
    yorumlar: String,
    yorumsayisi: String,
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
  })
);

module.exports = User;
