const productDetailsService = require('../services/productDetailsService');

exports.fetchProductDetails = async (req, res) => {
    const PName = req.params.PName;
    try {
        const productDetails = await productDetailsService.getProductDetails(PName);
        res.json(productDetails);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
