const employeeService = require('../services/employeeService');

exports.addEmployee = async (req, res) => {
    try {
        const result = await employeeService.addEmployee(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};
