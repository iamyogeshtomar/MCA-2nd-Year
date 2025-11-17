const express = require(`express`);
const app = express();
const PORT = 8000;

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

// http://localhost:8000/namaste

app.get(`/namaste`, (req, res) => {
    res.send(`<h1>Server pe swagat hai</h1>`);
});

app.get(`/:name/:age/:city`, (req, res) => {
    // res.send(`<h1>This is SRK's IG page</h1>`);
    // console.log(req.params);
    res.send(`<h1>My name is ${req.params.name} and I'm ${req.params.age} years old and I live in ${req.params.city}</h1>`);
    // const newObject = Object.create(req.params);
    // res.end();
});

app.get(`/student`, (req, res) => {
    // console.log(req.query);
    // res.end();
    res.json(req.query);
});

// query parameters
// path parameters - req.params
// request body



app.listen(PORT, () => {
    console.log(`Server is working fine at http://localhost:${PORT}`);
});