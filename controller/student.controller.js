const { studentData } = require("../model");
const db = require("../model");
const Data = db.studentData;
// Create and Save a new studentData

exports.create = (req, res) => {
  try {
    // Create a studentData
    const studentData = new Data({
      name: req.body.name,
      contact: req.body.contact,
      subjects: req.body.subjects,
      class: req.body.class,
      societies: req.body.societies,
      year: req.body.year,
    });

    // Save studentData in the database
    studentData.save(studentData).then((data) => {
      res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the studentData.",
    });
  }
};

//update data
exports.update = (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!",
      });
    }

    const id = req.params.id;

    studentData
      .findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update studentData with id=${id}. Maybe student was not found!`,
          });
        } else
          res
            .status(200)
            .send({ message: "student was updated successfully.", data });
      });
  } catch (err) {
    res.status(500).send({
      message: "Error updating student with id=" + id,
    });
  }
};
