const db = require('../config/db');

exports.getCL = (groupID) => {
    return new Promise((resolve, reject) => {
        const sql = "select CL from register WHERE GroupID=?";
        db.query(sql, [groupID], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.getCLLEN = (groupID) => {
    return new Promise((resolve, reject) => {
        const sql = "select ACTIVITY from users WHERE GroupID=? and ACTIVITY=?";
        db.query(sql, [groupID, 'LOGIN'], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};
