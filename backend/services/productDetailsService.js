const db = require('../config/db');

exports.getProductDetails = (PName) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM modules WHERE PName=?";
        db.query(sql, [PName], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
