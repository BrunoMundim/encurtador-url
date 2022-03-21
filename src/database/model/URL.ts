import mongoose from "mongoose";
const { Schema } = mongoose;

const encurtadorSchema = new Schema({
  hash: String,
  originURL: String,
  shortURL: String,
});

const URL = mongoose.model("URL", encurtadorSchema);

export default URL;
