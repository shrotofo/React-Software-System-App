const groupService = require('../services/groupService');

exports.getCL = async (req, res) => {
    try {
        const data = await groupService.getCL(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getCLLEN = async (req, res) => {
    try {
        const data = await groupService.getCLLEN(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
