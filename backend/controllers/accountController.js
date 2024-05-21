const accountService = require('../services/accountService');

exports.fetchActiveAccounts = async (req, res) => {
    try {
        const activeAccounts = await accountService.fetchAccountsByStatus(1);
        res.json(activeAccounts);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.fetchDeactiveAccounts = async (req, res) => {
    try {
        const deactiveAccounts = await accountService.fetchAccountsByStatus(0);
        res.json(deactiveAccounts);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.fetchRegisterDates = async (req, res) => {
    try {
        const registerDates = await accountService.fetchRegisterDates();
        res.json(registerDates);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
