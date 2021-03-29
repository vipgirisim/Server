const mongoose = require("mongoose");
  
module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      email: String,
      yorumyapan: String,
      yorum: String,
      yorumyapilankullanici: String,
      yorumacevap: String,
      fakeyorumacevap: String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Yorum = mongoose.model("Yorum", schema);
  return Yorum;
};
