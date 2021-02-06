/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { Client } = require('pg');
const fs = require('fs');

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

app.get('/', (req, res) => {
  client.query('SELECT * FROM LEGO where id = 1', (err, result) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    }
    console.log(result.rows);
    res.status(200).send(result.rows);
  });
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// COPY images(product_image, product_id)
// FROM '/Users/sambrandon/Documents/SJO-3/PostGres Testing/Testing/dataimages.csv'
// DELIMITER ','
// CSV HEADER;
