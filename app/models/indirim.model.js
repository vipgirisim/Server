module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        indirimkodu: String,
        kackisikullansin: String,
         yuzdeorani: String,
        baslangicTarihi: String,
        BitisTarihi: String, 

  
       },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Indirim = mongoose.model("indirim", schema);
    return Indirim;
  };
  