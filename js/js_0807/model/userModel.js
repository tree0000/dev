import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
});
export default mongoose.model("users", userSchema);

