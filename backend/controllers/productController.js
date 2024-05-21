const productService = require('../services/productService');

exports.createProduct = (req, res) => {
    productService.createProduct(req.body, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
};

exports.uploadProductImage = (req, res) => {
    const image = req.file.filename;
    const PName = req.body.PName;

    productService.uploadProductImage(image, PName, (err, result) => {
        if (err) return res.json("Error");
        console.log("file uploaded");
        return res.json(result);
    });
};


exports.getProductImage = async (req, res) => {
    try {
        const productName = req.params.ProductName;
        const productImage = await productService.getProductImageByName(productName);
        res.json(productImage);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving product image" });
    }
};

exports.getProductByName = async (req, res) => {
    try {
        const ProductName = req.params.ProductName;
        const productData = await productService.getProductByName(ProductName);
        res.json(productData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const productData = await productService.getAllProducts();
        res.json(productData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getModulesByProduct = async (req, res) => {
    try {
        const ProductSelected = req.params.ProductSelected;
        const moduleData = await productService.getModulesByProduct(ProductSelected);
        res.json(moduleData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getProductPIDByName = async (req, res) => {
    try {
        const ProductSelected = req.params.ProductSelected;
        const productPID = await productService.getProductPIDByName(ProductSelected);
        res.json(productPID);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
exports.fetchProducts = async (req, res) => {
    try {
        const products = await productFetchService.fetchProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};