const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// define the Schema (the structure of the blog)
const blogSchema = new Schema({
  title: String,
  summary: String,
  mytextarea: String,
});

// Create a model based on that schema
const Blog = mongoose.model("Blog", blogSchema);

// export the model
module.exports = Blog;
