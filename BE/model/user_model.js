var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var usersSchema = new Schema({
  email: String,
  psw: String,
  name: String,
  phone: String,
  loggedIn: {
      type: Boolean,
      default: false
  }
});

module.exports = mongoose.model("Users", usersSchema);
