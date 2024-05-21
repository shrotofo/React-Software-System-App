const db = require('../config/db');

exports.fetchAccountsByStatus = (status) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM register WHERE Status=?";
        db.query(sql, [status], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.fetchRegisterDates = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT RegisterDate FROM register";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
