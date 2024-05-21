const express = require('express');
const router = express.Router();
const productDetailsController = require('../controllers/productDetailsController');

router.get('/FetchProductDetails/:PName', productDetailsController.fetchProductDetails);

module.exports = router;
