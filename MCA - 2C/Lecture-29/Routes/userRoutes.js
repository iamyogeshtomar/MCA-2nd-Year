const router = require(`express`).Router();
const User = require("../Models/User");


// Write your routes below

// router.post(`/signup`,);

router.post(`/signup`, async (req, res) => {
    const { name, email, phone, dob, address } = req.body;
    // console.log(req.body);
    const newUser = await User.create({ name, email, phone, dob, address });
    res.json(newUser);
});

// router.post (`/login`, (req, res)=>{})


module.exports = router;