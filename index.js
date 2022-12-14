const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/Categories.json");
const courses = require("./Data/Courses.json");

app.get("/", (req, res) => {
  res.send("Course API Running.");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if(id === "08"){
      res.send(courses);
    }
    else{}
  const categoryNews = courses.filter((course) => course.category_id === id);
  res.send(categoryNews);
});

app.get("/allcourses", (req, res) => {
  res.send(courses);
});

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = courses.find((course) => course._id === id);
  res.send(selectedCourse);
});
app.get("/singlecourse/:id", (req, res) => {
  const id = req.params.id;
  const singlecourse = courses.find((course) => course._id === id);
  res.send(singlecourse);
});

app.listen(port, () => {
  console.log(`Course API Running ${port}`);
});
