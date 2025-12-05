const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// IIFE 

await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2D`);

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});