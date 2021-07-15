module.exports = (app) => {
  const studentData = require("../controller/student.controller");

  var router = require("express").Router();

  // Create a new student
  router.post("/", studentData.create);
  // Update a studentData with id
  router.put("/:id", studentData.update);

  // Retrieve all studentData
  router.get("/societies", studentData.findAll);

  // Retrieve a single student with id
  router.get("/:id", studentData.findOne);

  app.use("/api/student", router);
};
