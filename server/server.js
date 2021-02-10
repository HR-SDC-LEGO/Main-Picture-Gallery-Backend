/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable no-console */

require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const path = require('path');
const { getProducts, getImgs } = require('../database/SDC.js');

const connectionString = 'postgres://postgres:postgres@localhost:5432/lego';

const app = express();
const port = 3000;

// app.set('port', process.env.PORT || 4000);
app.use(express.static(path.resolve('client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
  connectionString,
});

client.connect((err) => {
  if (err) {
    console.log(err);
    console.log('Server -> DB RED ERROR');
  } else {
    console.log('Server -> DB GREEN');
  }
});

app.get('/api/lego/products', (req, res) => {
  getProducts(null, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      console.log(data, 'data in products');
      res.status(200).send(data.rows);
    }
  });
});

app.post('/api/lego/products/images', (req, res) => {
  getImgs(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      //console.log(data);
      res.status(200).send(data.rows);
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
