const registerService = require('../services/registerService');

exports.registerProduct = async (req, res) => {
    try {
        const { GroupID, PName, Time } = req.body;
        await registerService.registerProduct(GroupID, PName, Time);
        res.json({ message: "Product registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering product" });
    }
};

exports.registerModule = async (req, res) => {
    try {
        const { GROUPID, Module } = req.body;
        await registerService.registerModule(GROUPID, Module);
        res.json({ message: "Module registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering module" });
    }
};

exports.fetchRegisterByID = async (req, res) => {
    try {
        const ID = req.params.ID;
        const registerData = await registerService.fetchRegisterByID(ID);
        res.json(registerData);
    } catch (error) {
        res.status(500).json({ Message: "Error fetching register data" });
    }
};

exports.fetchStatus1 = async (req, res) => {
    try {
        const status = 1;
        const statusData = await registerService.fetchStatusData(status);
        res.json(statusData);
    } catch (error) {
        res.status(500).json({ Message: "Error fetching status data" });
    }
};

exports.fetchStatus0 = async (req, res) => {
    try {
        const status = 0;
        const statusData = await registerService.fetchStatusData(status);
        res.json(statusData);
    } catch (error) {
        res.status(500).json({ Message: "Error fetching status data" });
    }
};

exports.fetchBarData = async (req, res) => {
    try {
        const barData = await registerService.fetchBarData();
        res.json(barData);
    } catch (error) {
        res.status(500).json({ Message: "Error fetching bar data" });
    }
};