require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const port = process.env.PORT || 3000;
connectDB();

app.use(express.urlencoded());

const cookieParser = require('cookie-parser')
app.use(cookieParser());
app.use(express.json());

app.use('/', require('./routes/indexRoute'))

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port ${port}`)
})