module.exports = (app) => {
  const studentData = require("../controller/student.controller");

  var router = require("express").Router();

  // Create a new student
  router.post("/", studentData.create);
  // Update a studentData with id
  router.put("/:id", studentData.update);

  // Retrieve all studentData
  router.get("/", studentData.findAll);

  // Retrieve a single student with id
  router.get("/:id", studentData.findOne);

  // Delete a student with id
  router.delete("/:id", studentData.delete);

  // delete all student
  router.delete("/", studentData.deleteAll);
  app.use("/api/student", router);
};
