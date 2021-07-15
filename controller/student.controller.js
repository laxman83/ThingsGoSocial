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
    res.status(400).send({
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
    res.status(400).send({
      message: "Error updating student with id=" + id,
    });
  }
};

//get all data

exports.findAll = (req, res) => {
  try {
    studentData.find({}).then((data) => {
      res.send(data);
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving student.",
    });
  }
};

//find student by id
exports.findOne = (req, res) => {
  try {
    const id = req.params.id;

    studentData.findById(id).then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found student with id " + id });
      else res.status(200).send(data);
    });
  } catch (err) {
    res.status(500).send({ message: "Error retrieving student with id=" + id });
  }
};

//delete student by id
exports.delete = (req, res) => {
  try {
    const id = req.params.id;

    studentData.findByIdAndRemove(id).then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete student with id=${id}. Maybe student was not found!`,
        });
      } else {
        res.send({
          message: "student was deleted successfully!",
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Could not delete student with id=" + id,
    });
  }
};

//delete All student data

exports.deleteAll = (req, res) => {
  try {
    studentData.deleteMany({}).then((data) => {
      res.send({
        message: `${data.deletedCount} students were deleted successfully!`,
      });
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all studentData.",
    });
  }
};
