import mongoose from "mongoose";
import { ROLE, GENDER } from "../../enums.js";
import { validateEmail } from "../utils/validate.js";

const Schema = mongoose.Schema;

const userShema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true, match: validateEmail },
    password: { type: String, require: true },
    avatarULR: { type: String },
    gender: { type: String, enum: [GENDER.FEMALE, GENDER.MALE], require: true },
    role: { type: String, enum: [ROLE.ADMIN, ROLE.USER], require: true },
  },
  {
    timestamps: true,
  }
);

const userMongo = mongoose.model("users", userShema);

export default userMongo;
