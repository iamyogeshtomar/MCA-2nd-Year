const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.get(`/`, (req, res) => {
    // console.log(`Server working`);
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/checkNetwork`, (req, res) => {
    res.send(`Network is all well`);
});

// path parameters
app.get(`/:username/:city/:age`, (req, res) => {
    console.log(req.params);
    res.end();
});

// query parameters

app.get(`/query`, (req, res) => {
    console.log(req.query);
    res.send(`<h1>${req.query.actor} acted in ${req.query.name} in ${req.query.date}</h1>`);
    // res.end();
});

// request body

app.get(`/form`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `index.html`));
});

app.post(`/form`, (req, res) => {
    console.log(req.body);
    res.redirect(`/`);
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});