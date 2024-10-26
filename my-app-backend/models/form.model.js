require("dotenv").config();
const mongoose = require("mongoose");

const formSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const FormModel = mongoose.model("Form", formSchema);

module.exports = FormModel;
