const jwt = require(`jsonwebtoken`);
const User = require("../Models/User");


const verifyLogin = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(` `)[1];
        const decodedData = jwt.verify(token, `puppy`);
        const user = await User.findOne({ email: decodedData.email });
        if (user) {
            // User is valid, allow login
            next();
        }
        else {
            res.json({ message: `Unauthorized access!!!` });
        }
    }
    else {
        res.json({ message: `Token not found!!!` });
    }
};

module.exports = { verifyLogin };