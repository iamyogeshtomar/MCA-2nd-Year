const router = require(`express`).Router();
const User = require("../Models/User");
const bcryptjs = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

router.post(`/signup`, async (req, res) => {
    const { name, email, phone, address, password } = req.body;
    const hash = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ name, email, phone, address, password: hash });
    res.json(newUser);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const singleUser = await User.findOne({ email: email });
    if (singleUser) {
        const isValidPassword = await bcryptjs.compare(password, singleUser.password);
        if (isValidPassword) {
            // res.json({ message: `User signed in!!!` });
            const token = jwt.sign({ email: singleUser.email }, `keyboard cat`, { expiresIn: "7d" });
            res.json({
                message: `Sign in successful!!!`,
                token: token
            });
        }
        else {
            res.json({ message: `Invalid credentials!!!` });
        }
    }
    else {
        res.json({ message: `User not found!!!` });
    }
});

module.exports = router;