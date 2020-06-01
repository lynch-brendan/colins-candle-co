const express = require("express");
const mongoose = require("mongoose");
const orders = require('./routes/api/orders');
const users = require('./routes/api/users');
const auth = require('./routes/api/auth');
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const cors = require("cors");
app.use(express.json());

const db = process.env.REACT_APP_MONGO_URI;

mongoose
  .connect(process.env.REACT_APP_MONGO_URI,
    {useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//use Routes
app.use('/api/orders', orders);
app.use('/api/users', users);
app.use('/api/auth', auth);
const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});