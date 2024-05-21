const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');

router.get('/getCL/:ID', groupController.getCL);
router.get('/getCLLEN/:ID', groupController.getCLLEN);

module.exports = router;
