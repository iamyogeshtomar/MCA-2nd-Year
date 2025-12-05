const jwt = require(`jsonwebtoken`);


const isLoggedIn = (req, res, next) => {
    if (req.header?.authorization) {
        const token = req.header.authorization.split(` `)[1];
        const data = jwt.verify(token, `keyboard cat`);
    }
};