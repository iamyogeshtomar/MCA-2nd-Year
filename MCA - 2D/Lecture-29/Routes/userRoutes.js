const router = require(`express`).Router();
const User = require(`../Models/User.js`);

// Write your routes below


router.post(`/signup`, async (req, res) => {
    const { name, email, phone, password } = req.body;
    const user = await User.create({ name, email, phone, password });
    res.json(user);
});

module.exports = router;