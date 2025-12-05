const jwt = require(`jsonwebtoken`);
const User = require("../Models/User");


const verifyLogin = async (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        const token = req.headers.authorization.split(` `)[1];
        const decodedData = jwt.verify(token, `puppy`);
        const user = await User.findOne({ email: decodedData._doc.email });
        console.log(user);
        console.log(decodedData);
        if (user.email == decodedData._doc.email) {
            next();
        }
        else {
            res.json({ message: `Invalid user!!!` });
        }
        console.log(decodedData);
    }
    else {
        res.json({ message: `Token not found!!!!` });
    }
};


module.exports = { verifyLogin };