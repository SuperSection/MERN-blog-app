import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
    mon: 4,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

export const User = mongoose.model("User", UserSchema);
