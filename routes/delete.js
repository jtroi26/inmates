const express = require('express');
const router = express.Router();
const deleteController = require('../controller/deleteController');

router.post('/delete/:id', deleteController.deleteInmate);
module.exports = router;