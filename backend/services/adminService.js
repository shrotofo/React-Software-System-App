const db = require('../config/db');

exports.getHomeAdmin = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM register";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getInvoicePage = (ID) => {
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

exports.payNow = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register SET Pay=? WHERE GroupID=?";
        db.query(sql, ['Paid', ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.createUser = (ID, userData) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO users (Email, Password, GroupID, Name, Designation, Mobile) VALUES (?, ?, ?, ?, ?, ?)";
        const values = [userData.email, userData.password, ID, userData.Name, userData.Designation, userData.MobileNumber];
        db.query(sql, values, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

// Add other service methods here
