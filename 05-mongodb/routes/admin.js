const express = require("express");
const AdminMiddleware = require("../middlewares/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

//Admin routes
// it handles /admin/signup
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //check if user already exists
  //Admin.create({ username, password}); works same
  await Admin.create({ username: username, password: password }); //ideallly you should wait
  res.json({ message: "admin created successfully" });
});

router.post("/courses", AdminMiddleware, async (req, res) => {
  //create courses
  // USE ZOD VALIDATION
  title = req.body.title;
  description = req.body.description;
  imgLink = req.body.imgLink;
  price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imgLink,
    price,
  });
  res.json({
    message: "COurse created Succesfully.",
    courseId: newCourse._id,
  });
});

router.get("/courses", AdminMiddleware, async (req, res) => {
  //fetch courses
  const response = await Course.find({});
  res.json({ courses: response });
});

module.exports = router;
