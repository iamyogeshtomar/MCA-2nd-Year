const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/showForm`, (req, res) => {
    res.sendFile(path.resolve(__dirname, `index.html`));
});

app.post(`/showForm`, (req, res) => {
    console.log(req.body);
    res.end();
});

app.get (`/blogs`, (req, res)=>{
    
})

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});