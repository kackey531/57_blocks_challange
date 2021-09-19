var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  email: String,
  name: String,
  loc: String,
  phone: String,
  fav: {
      type: Array,
      default: []
  }
});

module.exports = mongoose.model("Data", dataSchema);
