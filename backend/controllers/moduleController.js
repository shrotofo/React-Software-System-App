const moduleService = require('../services/moduleService');


exports.createModule = async (req, res) => {
    try {
        const moduleData = {
            Module: req.body.Module,
            Price: req.body.Price,
            MDESC: req.body.MDESC,
            MUID: req.body.MUID
        };
        const result = await moduleService.createModule(moduleData);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error" });
    }
};


exports.fetchModules = async (req, res) => {
    try {
        const modules = await moduleService.fetchModules();
        res.json(modules);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};