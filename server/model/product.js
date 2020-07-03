const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductSchema = new Schema({
  // author: ObjectId,
  name: { type: String, required: true, max:[60, '最大６０文字までです。']},
  price: Number,
  description: String
});

module.exports = mongoose.model('Product', ProductSchema);