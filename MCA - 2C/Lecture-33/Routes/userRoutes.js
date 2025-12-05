const router = require(`express`).Router();
const User = require("../Models/User");
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const { verifyLogin } = require(`../middlewares/authMiddlewares.js`);


// Write your routes below

// router.post(`/signup`,);

router.post(`/signup`, async (req, res) => {
    const { name, email, phone, dob, address, password } = req.body;
    // console.log(req.body);
    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, phone, dob, address, password: hash });
    res.json(newUser);
});

router.post(`/login`, async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
        const checkPassword = await bcrypt.compare(password, user.password);
        if (checkPassword) {
            const token = jwt.sign({ email: user.email }, `puppy`, { expiresIn: "2d" });
            res.set(`Authorization`, token);
            res.json({ message: `Sign in successful!!!!` });
        }
        else {
            res.json({ message: `Invalid credentials` });
        }
    }
    else {
        res.json({ message: `User not found` });
    }
});

router.get(`/me`, verifyLogin, (req, res) => {
    // const { token } = req.body;
    // const data = jwt.verify(token, `keyboard cat`);
    // console.log(req.headers);
    res.json({ message: `You are logged in!!!` });
    // res.send(`Request recieved`);
});

router.get(`/you`, verifyLogin, (req, res) => { });

module.exports = router;