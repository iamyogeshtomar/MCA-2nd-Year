const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
const PORT = 3000;

// IIFE - Immediately invoking function expressions

(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2B`);
        console.log(`Database connected successfully!!!`);
    }
    catch (err) {
        console.log(err);
    }
})();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require(`./Routes/userRoutes.js`);

app.use(`/user`, userRoutes);

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});