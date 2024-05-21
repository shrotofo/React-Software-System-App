const db = require('../config/db');

exports.activate = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set `Status`=? WHERE GroupID=?";
        db.query(sql, [1, id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.deactivate = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set `Status`=? WHERE GroupID=?";
        db.query(sql, [0, id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.logoutUser = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE users set `ACTIVITY`=? WHERE Email=?";
        db.query(sql, ['LOGOUT', email], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.loginUser = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE users set `ACTIVITY`=? WHERE Email=?";
        db.query(sql, ['LOGIN', email], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.logoutClient = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set `ACTIVITY`=? WHERE GroupID=?";
        db.query(sql, ['LOGOUT', id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.loginClient = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set `ACTIVITY`=? WHERE GroupID=?";
        db.query(sql, ['LOGIN', id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.emailSent = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set `Emailsent`=? WHERE GroupID=?";
        db.query(sql, ['yes', id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};
