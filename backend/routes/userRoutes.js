const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/signup', userController.signup);
router.put('/edit/:ID', userController.editUser);
router.get('/read/:ID', userController.getUserById);
router.delete('/delete/:ID', userController.deleteUser);
router.get('/readuser/:EMAIL', userController.readUser);
router.get('/getLOGIN/:EMAIL', userController.getLoginByEmail);
router.get('/ONLINEget/:ID', userController.getOnlineById);
router.get('/getLOGIN', userController.getLogin);
router.delete('/delete/:ID', userController.deleteById);
router.delete('/deletePRODUCTMOD/:ID', userController.deleteProductMod);
router.delete('/deleteUser/:Email', userController.deleteUserByEmail);
router.post('/loginUser', userController.loginUser);
router.get('/viewusers/:ID', userController.viewUsers);
router.get('/checkusers/:ID', userController.checkUserCount);
router.post('/IDExist', userController.checkGroupIDExistence);
router.put('/Lkey/:ID', userController.updateLkey);
router.get('/Fetchcurrent/:ID', userController.fetchCurrentUsers);
router.get('/Fetchmax/:ID', userController.fetchMaxUsers);


module.exports = router;
