const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

router.get('/NewProductBilling/:ID', billingController.fetchNewProductBilling);

module.exports = router;
