const router = require(`express`).Router();
const Product = require(`../Models/Product.js`);

router.post(`/`, async (req, res) => {
    const { name, price, description, review } = req.body;
    const product = await Product.create({ name, price, description, review });
    res.json(product);
});

router.get(`/`, async (req, res) => {
    const allProducts = await Product.find({});
    res.json(allProducts);
});

router.get(`/:id`, async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json(product);
});

router.patch(`/:id`, async (req, res) => {
    const { name, price, description, review } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, description, review });
    res.json(updatedProduct);
});

module.exports = router;