const router = require(`express`).Router();
const User = require(`../Models/User.js`);
const bcryptjs = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);

const { verifyLogin } = require(`../middlewares/authMiddlewares.js`);

// Write your routes below


router.post(`/signup`, async (req, res) => {
    const { name, email, phone, password } = req.body;
    const hash = await bcryptjs.hash(password, 10);
    const user = await User.create({ name, email, phone, password: hash });
    res.json(user);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const singleUser = await User.findOne({ email: email });
    console.log(singleUser);
    if (singleUser) {
        const isValidPassword = bcryptjs.compareSync(password, singleUser.password);
        console.log(isValidPassword);
        if (isValidPassword) {
            // Allow Login
            const token = jwt.sign({ name: singleUser.name, email: singleUser.email }, `puppy`, { expiresIn: "7d" });
            res.setHeader(`authorization`, token);
            res.json({ message: `Signed in` });
        }
        else {
            res.json({ message: `Wrong credentials` });
        }
    }
    else {
        res.json({ message: `Invalid User` });
    }
});

router.get(`/me`, verifyLogin, (req, res) => {
    res.json({ message: `work done;`, });
});

module.exports = router;