const db = require('../config/db');

exports.getNewProductBilling = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM product_register, module_register, module, product 
                     WHERE product_register.GroupID = module_register.GROUPID 
                     AND product_register.GroupID = ? 
                     AND module.MNAME = module_register.MNAME 
                     AND module.PIID1 = product.PIID`;
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};
