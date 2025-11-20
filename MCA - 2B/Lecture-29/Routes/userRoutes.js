const router = require(`express`).Router();
const User = require("../Models/User");

router.post(`/signup`, async (req, res) => {
    const { name, email, phone, address } = req.body;
    const newUser = await User.create({ name, email, phone, address });
    res.json(newUser);
});

module.exports = router;