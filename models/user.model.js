const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"]
  },
});

const User = model("user", UserSchema);

module.exports = User;
