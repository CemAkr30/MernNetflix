const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array }, // This will be an array of objects
  },
  {
    timestamps: true, // This will automatically create fields for when the document was created and when it was last updated
  }
);

module.exports = mongoose.model("List", ListSchema);
