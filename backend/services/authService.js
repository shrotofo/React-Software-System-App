const crypto = require('crypto');
const db = require('../config/db'); // Ensure you have a database connection setup in db.js
const emailService = require('../services/emailService'); // Ensure you have a configured nodemailer transporter

exports.forgotPassword = (email) => {
    return new Promise((resolve, reject) => {
        const resetToken = crypto.randomBytes(40).toString('hex');
        const sql = "UPDATE register set PToken=? where Email=?";
        db.query(sql, [resetToken, email], (err, data) => {
            if (err) {
                return reject(err);
            }

            let mailOptions = {
                from: "test@gmail.com",
                to: email,
                subject: "Reset Your Password",
                text: '',
                html: `<h2>Hi</h2><p>We received a request to reset the password for your account for this email address. To initiate the password reset process for your account, Paste the Token on your Form</p><h3>Your Password Reset Token is >> ${resetToken}</h3><h3>Please enter the Token on the password Reset Form</h3>`
            };

            emailService.sendMail(mailOptions, (err, data) => {
                if (err) {
                    return reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    });
};

exports.resetPassword = (email, password, token) => {
    return new Promise((resolve, reject) => {
        const sql = "UPDATE register set Password=? where Email=? AND PToken=?";
        db.query(sql, [password, email, token], (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data);
        });
    });
};

exports.checkToken = (email, token) => {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM register WHERE Email=? AND PToken=?";
        db.query(sql, [email, token], (err, data) => {
            if (err) return reject(err);
            resolve(data.length > 0);
        });
    });
};


exports.loginAdmin = (email, password) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from register WHERE Email=? AND Password=? AND Type=?";
        db.query(sql, [email, password, 'Admin'], (err, data) => {
            if (err) {
                return reject(err);
            }
            if (data.length > 0) {
                resolve("Success");
            } else {
                resolve("login failed");
            }
        });
    });
};

exports.loginEmployee = (email, password) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from register WHERE Email=? AND Password=? AND Status=? AND Type=?";
        db.query(sql, [email, password, 1, 'Employee'], (err, data) => {
            if (err) {
                return reject(err);
            }
            if (data.length > 0) {
                resolve("Success");
            } else {
                resolve("failed");
            }
        });
    });
};

exports.loginUser = (email, password, groupID) => {
    return new Promise((resolve, reject) => {
        const sql = "select * from users WHERE Email=? AND Password=? AND GroupID=?";
        db.query(sql, [email, password, groupID], (err, data) => {
            if (err) {
                return reject(err);
            }
            if (data.length > 0) {
                resolve("Success");
            } else {
                resolve("failed");
            }
        });
    });
};