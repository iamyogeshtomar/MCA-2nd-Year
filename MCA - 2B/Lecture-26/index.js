const express = require(`express`);
const app = express();
const PORT = 3000;

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!!</h1>`);
});

// app.get(`/yogesh`, (req, res) => {
//     res.send(`<h1>This is my route</h1>`);
// });

// query parameters
// path parameters
// body of request

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});