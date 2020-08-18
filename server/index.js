// .dotenv
require('dotenv').config();

// port being used
const port = 8001;

//express
const express = require('express');

const app = express();

const session = require('express-session');

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAg: 1000 * 60 * 60 * 48 },
    secret: SESSION_SECRET,
  })
);

app.use(express.json);

// massive
const massive = require('massive');

// controller
// const controller = require('./controller')

// destructure vars from .env to use in index.js
const { SERVER_PORT, CONNECTION_STRING } = process.env;

// massive connecting to db
massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false,
  },
})
  .then((db) => {
    app.set('db', db);
    console.log('db connected');
  })
  .catch((err) => console.log(err));

// endpoints
app.post('/auth/login', ctrl.login);
app.post('/auth/register', ctrl.register);
app.get('/auth/user', ctrl.getUser);
app.post('/auth/logout', ctrl.logout);

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
