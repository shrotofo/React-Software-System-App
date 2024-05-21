const billingService = require('../services/billingService');

exports.fetchNewProductBilling = async (req, res) => {
    const ID = req.params.ID;
    try {
        const billingData = await billingService.getNewProductBilling(ID);
        res.json(billingData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
