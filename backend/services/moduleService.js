const db = require('../config/db'); // Ensure you have a database connection setup in db.js

exports.createModule = (moduleData) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO module (`MNAME`,`MCOST`,`MDESC`,`PIID1`) VALUES (?)";
        const values = [moduleData.Module, moduleData.Price, moduleData.MDESC, moduleData.MUID];

        db.query(sql, [values], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};


exports.fetchModules = () => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM module";
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};