const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/registerproduct', registerController.registerProduct);
router.post('/registermodules', registerController.registerModule);
router.get('/FetchRegister/:ID', registerController.fetchRegisterByID);
router.get('/FetchStatus1', registerController.fetchStatus1);
router.get('/FetchStatus0', registerController.fetchStatus0);
router.get('/Fetchbar', registerController.fetchBarData);


// Add other routes here

module.exports = router;
