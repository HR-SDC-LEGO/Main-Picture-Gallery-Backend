/* eslint-disable no-console */
const { client } = require('./key');

client.connect();

// client.query('SELECT * FROM images where product_id = 1', (err, res) => {
//   if (err) {
//     console(err);
//   } else {
//     console.log(res.rows);
//   }
//   client.end();
// });

const getImgs = (qry, callback) => {
  client.query('SELECT * FROM images WHERE product_id = 1', (err, data) => {
    console.log('sam');
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
  client.end();
};

const getProducts = (qry, callback) => {
  client.query('SELECT * FROM products WHERE product_id = 1', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
  client.end();
};

module.exports = {
  getProducts,
  getImgs,
};
