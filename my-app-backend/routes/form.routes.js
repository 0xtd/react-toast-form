const express = require('express');
const router = express.Router();
const { createForm } = require('../controllers/form.controller');

router.post('/lead-form', createForm);

module.exports = router;