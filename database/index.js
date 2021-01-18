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

const addImg = (img, callback) => {
  const imgQuery = `INSERT INTO images (product_image) VALUES ("${img}")`;
  connection.connect(imgQuery, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getAll = () => {
  //will get all from the db using a join table
};

module.exports = {
  addImg,
  addProduct,
  getAll,
};
