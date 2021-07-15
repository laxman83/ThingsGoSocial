module.exports = (app) => {
  const studentData = require("../controller/student.controller");

  var router = require("express").Router();

  // Create a new student
  router.post("/", studentData.create);
  // Update a studentData with id
  router.put("/:id", studentData.update);
  app.use("/api/student", router);
};
