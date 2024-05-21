const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.put('/forgotpassword', authController.forgotPassword);
router.put('/resetpassword', authController.resetPassword);
router.post('/checkToken', authController.checkToken);

router.post('/loginAdmin', authController.loginAdmin);
router.post('/loginEmployee', authController.loginEmployee);

module.exports = router;
