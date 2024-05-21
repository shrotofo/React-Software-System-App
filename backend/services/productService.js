const db = require('../config/db');

exports.createProduct = (productData, callback) => {
    const sql = "INSERT INTO product (`PNAME`,`LCOST`,`PDESC`) VALUES (?)";
    db.query(sql, [[productData.PName, productData.Lfee, productData.PDesc]], callback);
};

exports.uploadProductImage = (image, PName, callback) => {
    const sql = "UPDATE product set PLOGO=? WHERE PNAME=?";
    db.query(sql, [image, PName], callback);
};

exports.getProductImageByName = (productName) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT PLOGO FROM product WHERE PNAME=?";
        db.query(sql, [productName], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getProductByName = (ProductName) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM product WHERE PNAME=?";
        db.query(sql, [ProductName], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getAllProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM product";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getModulesByProduct = (ProductSelected) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM module WHERE PIID1=?";
        db.query(sql, [ProductSelected], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getProductPIDByName = (ProductSelected) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT PIID FROM product WHERE PNAME=?";
        db.query(sql, [ProductSelected], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}; 

exports.fetchProducts = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM product";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};