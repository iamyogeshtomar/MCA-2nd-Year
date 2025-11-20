const express = require(`express`);
const app = express();
const mongoose = require(`mongoose`);
const path = require(`path`);
const PORT = 3000;

// IIFE - Immediately invoking function expressions
(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2A`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();


app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});