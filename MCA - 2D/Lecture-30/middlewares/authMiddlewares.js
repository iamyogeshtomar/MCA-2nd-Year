


const verifyLogin = (req, res, next) => {
    if (req.headers && req.headers.authorization) {
        console.log(req.headers.authorization);
    }
    next();
};

module.exports = { verifyLogin };