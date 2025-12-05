const router = require(`express`).Router();
const User = require("../Models/User");
const bcryptjs = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const { verifyLogin } = require(`../middlewares/authMiddleware.js`);


router.post(`/signup`, async (req, res) => {
    const { name, email, phone, address, password } = req.body;
    const hash = await bcryptjs.hash(password, 10);
    const newUser = await User.create({ name, email, phone, address, password: hash, role });
    res.json(newUser);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const singleUser = await User.findOne({ email: email });
    if (singleUser) {
        const isValidPassword = await bcryptjs.compare(password, singleUser.password);
        if (isValidPassword) {
            const token = jwt.sign({ ...singleUser }, `puppy`, { expiresIn: "1d" });
            res.set(`Authorization`, token);
            res.json({ message: `User Signed in!!!!` });
        }
        else {
            res.json({ message: `Invalid credentials!!!!!` });
        }
    } else {
        res.json({ message: `User not found!!!` });
    }
});

router.get(`/me`, verifyLogin, (req, res) => {
    // console.log(req.headers);
    res.json({ message: `You are logged in` });
});

router.get(`/mailDelete`, verifyLogin, (req, res) => { });

module.exports = router;