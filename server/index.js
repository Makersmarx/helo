// .dotenv
require('dotenv').config();

// port being used
const port = 8001;

//express
const express = require('express');

const app = express();

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

app.listen(port, () => console.log(`Loud and Proud on Port: ${port}`));
