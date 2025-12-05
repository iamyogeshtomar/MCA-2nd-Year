const router = require(`express`).Router();
const Product = require("../Models/Product");

router.post(`/product`, async (req, res) => {
    const { name, price, description, review } = req.body;
    const newProduct = await Product.create({ name, price, description, review });
    res.json(newProduct);
});

router.get(`/product`, async (req, res) => {
    const allProducts = await Product.find({});
    res.json(allProducts);
});

router.get(`/product/:id`, async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json(product);
});

router.patch(`/product/:id`, async (req, res) => {
    const { name, price, description, review } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, description, review });
    res.json(updatedProduct);
});

module.exports = router;