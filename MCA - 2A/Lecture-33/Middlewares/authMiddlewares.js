const jwt = require(`jsonwebtoken`);
const User = require("../Models/User");



const verifyLogin = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(` `)[1];
        const decodedData = jwt.verify(token, `puppy`);
        const user = await User.findOne({ email: decodedData.email });
        if (user) {
            // Allow Login
            next();
        }
        else {
            res.json({ message: `Invalid authorization!!!` });
        }
    }
    else {
        res.json({ message: `Sign in first!!!!!` });
    }
};

module.exports = { verifyLogin };