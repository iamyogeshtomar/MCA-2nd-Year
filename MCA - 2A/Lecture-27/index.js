const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`<h1>Welcome to our server <span>Made By Me</span></h1>`);
    // return;
});

app.listen(PORT, () => {
    console.log(`Server is working fine at http://localhost:${PORT}`);
});