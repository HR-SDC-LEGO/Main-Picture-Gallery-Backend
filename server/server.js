/* eslint-disable max-len */
/* eslint-disable no-console */

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
      // console.log(data, 'data in products');
      res.status(200).send(JSON.stringify(data));
    }
  });
});

app.post('/api/lego/products/images', (req, res) => {
  getImgs(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      // console.log(data);
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// COPY images(product_image, product_id)
// FROM '/Users/sambrandon/Documents/SJO-3/FEC-lego-gallery/Main-Product-Gallery/CSV_files/dataImages.csv'
// DELIMITER ','
// CSV HEADER;

// COPY products(product_name)
// FROM '/Users/sambrandon/Documents/SJO-3/FEC-lego-gallery/Main-Product-Gallery/CSV_files/Products.csv'
// DELIMITER ','
// CSV HEADER;
