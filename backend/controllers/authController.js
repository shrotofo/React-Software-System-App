const authService = require('../services/authService');

exports.forgotPassword = async (req, res) => {
    try {
        const result = await authService.forgotPassword(req.body.email);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

exports.resetPassword = async (req, res) => {
    try {
        const result = await authService.resetPassword(req.body.email, req.body.Password, req.body.PToken);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};

exports.checkToken = async (req, res) => {
    try {
        const result = await authService.checkToken(req.body.email, req.body.PToken);
        if (result) {
            res.json("Success");
        } else {
            res.json("login failed");
        }
    } catch (error) {
        res.status(500).json({ message: "login failed" });
    }
};


exports.loginAdmin = async (req, res) => {
    try {
        const data = await authService.loginAdmin(req.body.email, req.body.password);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.loginEmployee = async (req, res) => {
    try {
        const data = await authService.loginEmployee(req.body.email, req.body.password);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
