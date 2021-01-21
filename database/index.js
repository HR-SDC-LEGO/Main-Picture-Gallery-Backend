/* eslint-disable quotes */
/* eslint-disable no-console */

const { connection } = require('./config.js');

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('the connected to the database LEGO');
  }
});

const addProduct = (productName, callback) => {
  const insertQury = `INSERT INTO products (product_name) VALUES ("${productName}")`;
  connection.query(insertQury, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const addImg = (img, id, imgId, callback) => {
  const imgQuery = `INSERT INTO images (product_image, product_id, image_id) VALUES ("${img}", "${id}", "${imgId}")`;
  connection.query(imgQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getImgs = (qry, callback) => {
  connection.query('SELECT * FROM images WHERE product_id=1', (err, data) => {
    console.log('sam');
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getProducts = (qry, callback) => {
  connection.query('SELECT * FROM products WHERE product_id=1', (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  addImg,
  addProduct,
  getProducts,
  getImgs,
};
