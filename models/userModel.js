import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerk_Id: {
      type: String,
      required: [true, "A user must have a clerk id"],
      unique: true,
    },
    firstName: {
      type: String,
      required: [true, "A user must have a first name"],
    },
    lastName: {
      type: String,
    },
    mobile: {
      type: String,
      required: [true, "A user must have a mobile"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "A user must have a email"],
      unique: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    photo: {
      type: String,
    },
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
