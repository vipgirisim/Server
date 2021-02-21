module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      burcadi: String,
      burclinki: String,
    //  burcresimyolu: String,

     },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Burclar = mongoose.model("burclar", schema);
  return Burclar;
};
