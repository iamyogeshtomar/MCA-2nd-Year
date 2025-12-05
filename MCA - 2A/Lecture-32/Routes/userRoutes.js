const router = require(`express`).Router();
const User = require("../Models/User");
const bcryptjs = require(`bcryptjs`);


router.post(`/signup`, async (req, res) => {
    const { name, phone, email, password } = req.body;
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({ name, phone, email, password: hash });
    res.json(user);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.find({ email: email });
    console.log(user);
    if (user) {
        const isValidPassword = bcryptjs.compare(password, user.password);
        if (isValidPassword) {
            res.json({ message: `Sign in successful!!!` });
        }
        else {
            res.json({ message: `Invalid Credentials!!!` });
        }
    }
    else {
        res.json({ message: `Check input again` });
    }
});

module.exports = router;