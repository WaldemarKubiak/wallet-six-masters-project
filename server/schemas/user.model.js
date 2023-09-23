import { Schema, model } from "mongoose";
import bCrypt from "bcryptjs";

const user = new Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },

    firstName: {
      type: String,
      required: [true, "First name is required"],
    },

    token: {
      type: String,
      default: null,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    verificationToken: {
      type: String,
      },
  },
  { versionKey: false, timestamps: true }
);

user.methods.setPassword = function (password) {
  this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(6));
};

user.methods.validPassword = function (password) {
  return bCrypt.compareSync(password, this.password);
};

const User = model("user", user);

export default User;
