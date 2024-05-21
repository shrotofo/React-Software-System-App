const express = require('express');
const router = express.Router();
const moduleController = require('../controllers/moduleController');

router.post('/newmodule', moduleController.createModule);
router.get('/mfetch', moduleController.fetchModules);


module.exports = router;
