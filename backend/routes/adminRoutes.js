const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/homeAdmin', adminController.getHomeAdmin);
router.get('/home/:ID', adminController.getInvoicePage);
router.put('/paynow/:ID', adminController.payNow);
router.post('/createuser/:ID', adminController.createUser);


module.exports = router;
