const router = require(`express`).Router();
const Product = require("../Models/Product");


// Write your routes below

router.get(`/`, async (req, res) => {
    const allProducts = await Product.find({});
    res.json(allProducts);
});

router.post(`/`, async (req, res) => {
    const { name, price, description, review } = req.body;
    // const newProduct = new Product({ name, price, description, review });
    // await newProduct.save();
    const newProduct = await Product.create({ name, price, description });
    res.redirect(`/products`);
});

router.get(`/:id`, async (req, res) => {
    // const { id } = req.params;
    const singleProduct = await Product.findById(req.params.id);
    res.json(singleProduct);
});

router.patch(`/:id`, async (req, res) => {
    const { name, price, description } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { name, price, description });
    res.json(updatedProduct);
});

module.exports = router;