const { Schema } = require("mongoose");

module.exports = (mongoose, Schema) => {
  const BrandSchema = new Schema({
    name: { type: String, required: true },
    logo: { type: String, required: true },
  });

  const Brand = mongoose.model("Brand", BrandSchema);

  return Brand;
};
