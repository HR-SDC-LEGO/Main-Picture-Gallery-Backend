/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const { getProducts, getImgs } = require('../database/SDC');

const connectionString = 'postgres://postgres:postgres@localhost:5432/lego';

const app = express();
const port = 3000;

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = new Client({
  connectionString,
});

client.connect();

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

// COPY images(product_image, product_id)
// FROM '/Users/sambrandon/Documents/SJO-3/PostGres Testing/Testing/dataimages.csv'
// DELIMITER ','
// CSV HEADER;
