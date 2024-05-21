const userService = require('../services/userService');

exports.signup = (req, res) => {
    userService.signup(req.body, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
};

exports.editUser = (req, res) => {
    const userId = req.params.ID;
    userService.editUser(userId, req.body, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.ID;
    userService.getUserById(userId, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.ID;
    userService.deleteUser(userId, (err, data) => {
        if (err) return res.json("Error");
        return res.json(data);
    });
};

exports.readUser = async (req, res) => {
    try {
        const data = await userService.readUser(req.params.EMAIL);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getLoginByEmail = async (req, res) => {
    try {
        const data = await userService.getLoginByEmail(req.params.EMAIL);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getOnlineById = async (req, res) => {
    try {
        const data = await userService.getOnlineById(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.getLogin = async (req, res) => {
    try {
        const data = await userService.getLogin();
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.deleteById = async (req, res) => {
    try {
        const data = await userService.deleteById(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.deleteProductMod = async (req, res) => {
    try {
        const data = await userService.deleteProductMod(req.params.ID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.deleteUserByEmail = async (req, res) => {
    try {
        const data = await userService.deleteUserByEmail(req.params.Email);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const data = await userService.loginUser(req.body.email, req.body.password, req.body.GroupID);
        res.json(data);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};
exports.viewUsers = async (req, res) => {
    try {
        const ID = req.params.ID;
        const users = await userService.getUsersByGroupID(ID);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving users" });
    }
};

exports.checkUserCount = async (req, res) => {
    try {
        const ID = req.params.ID;
        const userCount = await userService.getUserCountByGroupID(ID);
        res.json(userCount);
    } catch (error) {
        res.status(500).json({ message: "Error checking user count" });
    }
}


exports.checkGroupIDExistence = async (req, res) => {
    try {
        const groupID = req.body.GroupID;
        const result = await userService.checkGroupIDExistence(groupID);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error checking GroupID existence" });
    }
};

exports.updateLkey = async (req, res) => {
    try {
        const groupID = req.params.ID;
        const lkey = req.body.Lkey;
        const result = await userService.updateLkey(groupID, lkey);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error updating Lkey" });
    }
};

exports.fetchCurrentUsers = async (req, res) => {
    try {
        const ID = req.params.ID;
        const userData = await userService.fetchCurrentUsers(ID);
        res.json(userData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.fetchMaxUsers = async (req, res) => {
    try {
        const ID = req.params.ID;
        const userData = await userService.fetchMaxUsers(ID);
        res.json(userData);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};

exports.viewUsers = async (req, res) => {
    try {
        const userID = req.params.ID;
        const users = await userService.getUsersByGroupID(userID);
        res.json(users);
    } catch (error) {
        res.status(500).json({ Message: "Error" });
    }
};