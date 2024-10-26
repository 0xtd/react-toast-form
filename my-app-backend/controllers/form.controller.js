const FormModel = require("../models/form.model");

exports.createForm = async (req, res) => {
  try {
    const { fullName, phone } = req.body;

    let newForm = { fullName, phone };

    newForm = await FormModel.create(newForm);

    res.status(201).json({
      success: true,
      newForm,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
