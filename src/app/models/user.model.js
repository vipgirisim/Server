const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name:String,
    surname:String,
    username: String,
    phone:String,
    dtarihi:String,
    falcirutbe:String,
    iban:String,
    indirimcodu:String,
    profilresmi:String,
    yorumlar:String,
    yorumsayisi:String,
    onlinedurumu:String,
    cuzdan:String,
    geliryuzdesi:String,
    yazilikahvefaliucreti:String,
    canlikahvefaliucreti:String,
    baktigikahvefalisayisi:String,
    falciyetkisi:String,
    email: String,
    password: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
