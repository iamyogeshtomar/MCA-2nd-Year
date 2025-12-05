const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;
const mongoose = require(`mongoose`);

// IIFE
(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2C`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require(`./Routes/userRoutes.js`);
const productRoutes = require(`./Routes/productRoutes.js`);

app.use(`/products`, productRoutes);
app.use(`/user`, userRoutes);

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});