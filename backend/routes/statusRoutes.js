const express = require('express');
const router = express.Router();
const statusController = require('../controllers/statusController');

router.put('/activate/:ID', statusController.activate);
router.put('/deactivate/:ID', statusController.deactivate);
router.put('/LOGOUTuser/:EMAIL', statusController.logoutUser);
router.put('/LOGINuser/:EMAIL', statusController.loginUser);
router.put('/LOGOUTCLIENT/:ID', statusController.logoutClient);
router.put('/LOGINCLIENT/:ID', statusController.loginClient);
router.put('/Emailsent/:ID', statusController.emailSent);

module.exports = router;
