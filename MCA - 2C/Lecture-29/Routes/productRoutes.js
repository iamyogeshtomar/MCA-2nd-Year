const router = require(`express`).Router();
const Product = require("../Models/product.js");

// Write your routes below

router.get(`/`, async (req, res) => {
    const allProducts = await Product.find({});
    res.json(allProducts);
});

router.get(`/:id`, async (req, res) => {
    const { id } = req.params;
    const singleProduct = await Product.findById(id);
    res.json(singleProduct);
});

router.post(`/`, async (req, res) => {
    const { name, price, description } = req.body;
    const newProduct = await Product.create({ name, price, description });
    res.json(newProduct);
});

router.patch(`/:id`, async (req, res) => {
    const { id } = req.params;
    const { name, price, description } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, description });
    res.json(updatedProduct);
});

module.exports = router;