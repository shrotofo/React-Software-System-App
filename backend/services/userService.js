const db = require('../config/db');

exports.signup = (userData, callback) => {
    const sql = "INSERT INTO register (Email, Password, GroupID, GroupCode, GroupDesc, ContactPerson, Designation, MobileNumber, Users, RegisterDate, Country, Address, Postal, City, Type, CL) VALUES (?)";
    const values = [
        userData.email, userData.password, userData.GroupID, userData.GroupCode,
        userData.GroupDesc, userData.ContactPerson, userData.Designation,
        userData.MobileNumber, userData.Users, userData.RegisterDate,
        userData.Country, userData.Address, userData.Postal, userData.City,
        userData.Type, userData.CL
    ];
    db.query(sql, [values], callback);
};

exports.editUser = (userId, userData, callback) => {
    const sql = "UPDATE register SET Email=?, Password=?, GroupID=?, GroupCode=?, GroupDesc=?, ContactPerson=?, Designation=?, MobileNumber=?, Users=?, Country=?, Address=?, Postal=?, City=?, CL=? WHERE GroupID=?";
    db.query(sql, [
        userData.email, userData.password, userData.GroupID, userData.GroupCode,
        userData.GroupDesc, userData.ContactPerson, userData.Designation,
        userData.MobileNumber, userData.Users, userData.Country, userData.Address,
        userData.Postal, userData.City, userData.CL, userId
    ], callback);
};

exports.getUserById = (userId, callback) => {
    const sql = "SELECT * FROM register WHERE GroupID=?";
    db.query(sql, [userId], callback);
};

exports.deleteUser = (userId, callback) => {
    const sql = "DELETE FROM register WHERE GroupID=?";
    db.query(sql, [userId], callback);
};


exports.readUser = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from users where Email=?";
        db.query(sql, [email], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.getLoginByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from users where ACTIVITY=? AND GROUPID=?";
        db.query(sql, ['LOGIN', email], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.getOnlineById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from registers where ONLINE=? AND GROUPID=?";
        db.query(sql, ['true', id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.getLogin = () => {
    return new Promise((resolve, reject) => {
        const sql = "select * from register where ACTIVITY=?";
        db.query(sql, ['LOGIN'], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.deleteById = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM register WHERE GroupID=?";
        db.query(sql, [id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.deleteProductMod = (id) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM product,module USING product INNER JOIN module ON product.PIID=? AND module.PIID1=?";
        db.query(sql, [id, id], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.deleteUserByEmail = (email) => {
    return new Promise((resolve, reject) => {
        const sql = "DELETE FROM users WHERE Email=?";
        db.query(sql, [email], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};


exports.getUsersByGroupID = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE GroupID=?";
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.getUserCountByGroupID = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT COUNT(*) AS userCount FROM users WHERE GroupID=?";
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


exports.checkGroupIDExistence = (groupID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE GroupID=?";
        db.query(sql, [groupID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data.length > 0 ? "Success" : "Failed");
            }
        });
    });
};

exports.updateLkey = (groupID, lkey) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register SET `Lkey`=? WHERE `GroupID`=?";
        db.query(sql, [lkey, groupID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.fetchCurrentUsers = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE GroupID=?";
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

exports.fetchMaxUsers = (ID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT Users FROM register WHERE GroupID=?";
        db.query(sql, [ID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};


exports.getUsersByGroupID = (groupID) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM users WHERE GroupID=?";
        db.query(sql, [groupID], (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};