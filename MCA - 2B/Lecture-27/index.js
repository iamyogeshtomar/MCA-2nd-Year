const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!!</h1>`);
});

app.get(`/query`, (req, res) => {
    console.log(req.query);
    res.send(`<h1>Query recieved</h1>`);
});


app.get(`/:movie/:year/:actor`, (req, res) => {
    // console.log(req.params);
    res.send(`<h1>${req.params.actor} acted in ${req.params.movie} in ${req.params.year}</h1>`);
    res.end();
});

app.get(`/showForm`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `index.html`));
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