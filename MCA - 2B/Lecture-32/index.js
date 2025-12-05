const express = require(`express`);
const app = express();
const path = require(`path`);
const mongoose = require(`mongoose`);
const cookieParser = require(`cookie-parser`);
const session = require(`express-session`);
const PORT = 3000;

// IIFE - Immediately invoking function expressions

(async () => {
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/MCA-2B`);
        console.log(`Database connected successfully!!!`);
    }
    catch (err) {
        console.log(err);
    }
})();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));

const userRoutes = require(`./Routes/userRoutes.js`);
const productRoutes = require(`./Routes/productRoutes.js`);

app.use(`/products`, productRoutes);
app.use(`/user`, userRoutes);

app.get(`/`, (req, res) => {
    res.send(`<h1>Server is working fine!!!</h1>`);
});

app.get(`/cookie`, (req, res) => {
    const { name, city } = req.query;
    res.cookie(`name`, name);
    res.cookie(`city`, city);
    res.cookie(`isTicketValid`, false);
    res.send(`<h1>Cookies recieved</h1>`);
});

app.get(`/showCookies`, (req, res) => {
    console.log(req.cookies);
    if (req.cookies) {
        res.json({ message: `Cookies exist` });
    }
    else {
        res.json({ message: `Cookies absent` });
    }
});

app.get(`/session`, (req, res) => {
    const { name, city } = req.query;
    req.session.name = name;
    req.session.city = city;
    console.log(req.session);
    res.end();
});

app.listen(PORT, () => {
    console.log(`Server is working on http://127.0.0.1:${PORT}`);
});