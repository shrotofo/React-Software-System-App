const db = require('../config/db');

exports.registerProduct = (GroupID, PName, Time) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO product_register (GroupID, ProductName, Time) VALUES (?, ?, ?)";
        db.query(sql, [GroupID, PName, Time], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.registerModule = (GROUPID, Module) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO module_register (GROUPID, MNAME) VALUES (?, ?)";
        db.query(sql, [GROUPID, Module], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.fetchRegisterByID = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM register WHERE GroupID=?";
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.fetchStatusData = (status) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT Status FROM register WHERE Status=?";
        db.query(sql, [status], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


exports.fetchBarData = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT PNAME, Time FROM product, product_register WHERE product.PNAME = product_register.ProductName";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};