const express = require(`express`);
const app = express();
const path = require(`path`);
const PORT = 3000;
const mongoose = require(`mongoose`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);

// IIFE
(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2C`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

const userRoutes = require(`./Routes/userRoutes.js`);
const productRoutes = require(`./Routes/productRoutes.js`);

app.use(`/products`, productRoutes);
app.use(`/user`, userRoutes);

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/cookie/:name/:place`, (req, res) => {
    res.cookie(`name`, req.params.name);
    res.cookie(`place`, req.params.place);
    res.cookie(`isPaymentDone`, false);
    res.send(`<h1>Cookies recieved</h1>`);
});

app.get(`/showCookies`, (req, res) => {
    const cookies = req.cookies;
    console.log(cookies);
    res.send(`The name is ${req.cookies.name}`);
});

app.get(`/session/:name/:place`, (req, res) => {
    console.log(req.session);
    req.session.name = req.params.name;
    req.session.place = req.params.place;
    console.log(req.session);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});