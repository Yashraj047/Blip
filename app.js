const express = require('express');
const app = express();

const cookieParser = require("cookie-parser");
const path = require('path');
const db = require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owners', ownersRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('Welcome to Blip!');
});


// Yeh code Express app ka setup hai.
// express, cookie-parser, path, aur mongoose-connection import kiya hai.
// Static files 'public' folder se serve ho rahe hain.
// EJS ko view engine set kiya hai.
// Routers: owners, users, products ke liye alag-alag route files use ho rahi hain.
// Server port 3000 pe listen kar raha hai.
// Sab kuch sahi chal raha toh console pe message aa jayega.
