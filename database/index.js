/* eslint-disable quotes */
/* eslint-disable no-console */

const { connection } = require('./config.js');

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('the connected to the db');
  }
});

const addToLEGO = (productName, productImage) => {
  console.log(productName);
  const qryString = `INSERT INTO products (product_name) VALUES ("${productName}")`;
  const qryImg = `INSERT INTO images (product_imgae) VALUES("${productImage}")`;

  connection.query(qryString, (err) => {
    if (!err) {
      connection.query(qryImg, (error) => {
        if (error) {
          throw err;
        }
      });
    } else {
      throw err;
    }
  });
};

module.exports = {
  addToLEGO,
};
