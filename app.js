const express = require("express");
const app = express();
const port = 3000;
const helmet = require("helmet");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const mongoose = require("mongoose");
const Blog = require("./models/blogSchema");

// Mongoose

mongoose
  .connect(
    "mongodb+srv://marwanzayed:marwan@myapp.ytwag.mongodb.net/alldata?retryWrites=true&w=majority"
  )
  .then((result) => {
    app.listen(process.env.PORT || port, () => {
      console.log(`http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use(helmet());

// For Public File
app.get("/", (req, res) => {
  res.render("index", { myTitle: "Marwan Life" });
});
app.get("/book", (req, res) => {
  res.render("book", { myTitle: "Book | Marawn Life" });
});
app.get("/book/:name", (req, res) => {
  res.render("bookName", { myTitle: "Book | Marawn Life" });
});
app.get("/courses", (req, res) => {
  res.render("courses", { myTitle: "Courses | Marawn Life" });
});
app.get("/programs", (req, res) => {
  res.render("programs", { myTitle: "Programs | Marawn Life" });
});
app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("blog", { myTitle: "Blogs | Marawn Life", arrBlog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/blogs/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((result) => {
      res.render("blog-details", {
        myTitle: `${result.title} | Blog`,
        objBlog: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// 404 Page Not Found
app.use((req, res) => {
  res
    .status(404)
    .render("page-not-found", { myTitle: "Page Not Found | Marwan Life" });
});
