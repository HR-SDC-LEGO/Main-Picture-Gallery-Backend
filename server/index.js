/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getProducts, getImgs } = require('../database/index.js');

const app = express();
const port = 3053;

app.use(express.static(path.resolve('client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/lego/products', (req, res) => {
  getProducts(null, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.post('/api/lego/products/images', (req, res) => {
  getImgs(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
