const uniqueValidator = require("mongoose-unique-validator");

module.exports = (mongoose) => {
  var studentSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      required: true,
    },
    subjects: {
      type: [String],
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    societies: {
      type: [String],
    },
    year: {
      type: Number,
    },
  });

  studentSchema.plugin(uniqueValidator);
  studentSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const studentData = mongoose.model("studentData", studentSchema);
  return studentData;
};
