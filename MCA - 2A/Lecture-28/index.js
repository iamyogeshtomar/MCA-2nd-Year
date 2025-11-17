const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

// query parameter
// Path parameter
// request body

app.get(`/:username/:car`, (req, res) => {
    // res.send(`<h1>SRK Route</h1>`);
    // console.log(req.params);
    res.send(`<h1>${req.params.username} has ${req.params.car} car</h1>`);
    // res.end();
});

app.get(`/query`, (req, res) => {
    console.log(req.query);
    res.end();
});

app.post(`/form`, (req, res) => {
    console.log(req.body);
    res.json(req.body)
    // res.send(`<h1>Body recieved</h1>`);
    // res.end();
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});