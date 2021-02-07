/* eslint-disable no-console */

const fs = require('fs');
const cvsWriter = require('csv-write-stream');

const writer = cvsWriter();
const faker = require('faker');

// const fileGlobalArrPictures = [];

const dataProducts = () => {
  writer.pipe(fs.createWriteStream('./CSV_files/Products.csv'));
  for (let i = -1; i < 10000000; i += 1) {
    writer.write({
      product_name: faker.commerce.productName(),
    });
    console.log(i);
  }
  writer.end();
  console.log('done with names');
};
dataProducts();
