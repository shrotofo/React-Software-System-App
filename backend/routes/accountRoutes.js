const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.get('/Activeacc', accountController.fetchActiveAccounts);
router.get('/Deactiveacc', accountController.fetchDeactiveAccounts);
router.get('/FetchDate', accountController.fetchRegisterDates);

module.exports = router;
