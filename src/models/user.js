import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already exists!"],
    required: [true, "Email is required!"],
  },
  username: {
    type: String,
    required: [true, "Username is required!"],
  },
  image: {
    type: String,
  },
});

const User = models.User || model("User", UserSchema);
// if model "User" already exists, use it. Otherwise, create a new model "User" with UserSchema
// that why we need to models.User
export default User;
