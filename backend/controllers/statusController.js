const statusService = require('../services/statusService');

exports.activate = async (req, res) => {
    try {
        const data = await statusService.activate(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.deactivate = async (req, res) => {
    try {
        const data = await statusService.deactivate(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.logoutUser = async (req, res) => {
    try {
        const data = await statusService.logoutUser(req.params.EMAIL);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const data = await statusService.loginUser(req.params.EMAIL);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.logoutClient = async (req, res) => {
    try {
        const data = await statusService.logoutClient(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.loginClient = async (req, res) => {
    try {
        const data = await statusService.loginClient(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.emailSent = async (req, res) => {
    try {
        const data = await statusService.emailSent(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
