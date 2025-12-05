const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
const PORT = 3000;

// Routes import

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IIFE  - Immediately invoking function expression

(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2D`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

const productRoutes = require(`./Routes/productRoutes.js`);

app.use(productRoutes);

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});