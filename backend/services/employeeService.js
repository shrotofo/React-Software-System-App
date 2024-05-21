const db = require('../config/db');

exports.addEmployee = (employeeData) => {
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO register (`Email`,`Password`,`GroupID`,`GroupCode`,`GroupDesc`,`ContactPerson`,`Designation`,`MobileNumber`,`Users`,`Country`,`Address`,`City`,`Postal`,`RegisterDate`) VALUES (?)";
        
        const values = [
            employeeData.email,
            employeeData.password,
            employeeData.GroupID,
            employeeData.GroupCode,
            employeeData.GroupDesc,
            employeeData.ContactPerson,
            employeeData.Designation,
            employeeData.MobileNumber,
            employeeData.Users,
            employeeData.Country,
            employeeData.Address,
            employeeData.City,
            employeeData.Postal,
            employeeData.RegisterDate
        ];

        db.query(sql, [values], (err, result) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};
