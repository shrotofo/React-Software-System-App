const adminService = require('../services/adminService');

exports.getHomeAdmin = async (req, res) => {
    try {
        const data = await adminService.getHomeAdmin();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching home data" });
    }
};

exports.getInvoicePage = async (req, res) => {
    try {
        const { ID } = req.params;
        const data = await adminService.getInvoicePage(ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching invoice data" });
    }
};

exports.payNow = async (req, res) => {
    try {
        const { ID } = req.params;
        await adminService.payNow(ID);
        res.json({ message: "Payment successful" });
    } catch (error) {
        res.status(500).json({ message: "Error processing payment" });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { ID } = req.params;
        const userData = req.body;
        await adminService.createUser(ID, userData);
        res.json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
};

