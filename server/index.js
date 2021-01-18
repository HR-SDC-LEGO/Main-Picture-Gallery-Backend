/* eslint-disable no-console */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getAll } = require('../database/index.js');

const app = express();
const port = 3000;

app.use(express.static(path.resolve('client', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/lego/products', (req, res) => {
  getAll(null, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
