import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const AdminSchema = new mongoose.Schema({
  username: String,
});

AdminSchema.plugin(passportLocalMongoose, {
  usernameField: "username",
  passwordField: "password",
});

const model = mongoose.model("Admin", AdminSchema);

export default model;
