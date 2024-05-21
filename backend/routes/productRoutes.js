const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multerMiddleware = require('../middlewares/multer');

router.post('/newproduct', productController.createProduct);
router.post('/uploadPImg', multerMiddleware.single('image'), productController.uploadProductImage);
router.get('/getproduct/:ProductName', productController.getProductByName);
router.get('/getproduct', productController.getAllProducts);
router.get('/getmodules/:ProductSelected', productController.getModulesByProduct);
router.get('/getproductPID/:ProductSelected', productController.getProductPIDByName);
router.get('/pfetch', productController.fetchProducts);
router.get('/getImg/:ProductName', productController.getProductImage);


module.exports = router;
