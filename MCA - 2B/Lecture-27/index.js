const express = require(`express`);
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!!</h1>`);
});

app.get(`/query`, (req, res) => {
    console.log(req.query);
    res.end();
});

app.get(`/:movie/:year/:actor`, (req, res) => {
    console.log(req.params);
    res.end();
});

app.post(`/submit`, (req, res) => {
    console.log(req.body);
    res.send(`<h1>Form recieved</h1>`);
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