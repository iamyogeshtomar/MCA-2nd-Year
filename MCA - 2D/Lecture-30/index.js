const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);
const PORT = 3000;

// Routes import

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}));

// IIFE  - Immediately invoking function expression

(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2D`);
        console.log(`Database connected successfully!!!`);
    } catch (error) {
        console.log(error);
    }
})();

const productRoutes = require(`./Routes/productRoutes.js`);
const userRoutes = require(`./Routes/userRoutes.js`);

app.use(productRoutes);
app.use(`/user`, userRoutes);

app.use(express.static(path.resolve(__dirname, `public`)));

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/cookie`, (req, res) => {
    res.cookie(`name`, req.query.name);
    res.cookie(`place`, req.query.place);
    res.cookie(`isPaymentDone`, false);
    res.send(`<h1>Cookies recieved!!!</h1>`);
});

app.get(`/showCookies`, (req, res) => {
    console.log(req.cookies);
    res.end();
});

app.get(`/session`, (req, res) => {
    console.log(req.session);
    req.session.name = req.query.name;
    req.session.place = req.query.place;
    console.log(req.session);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});
