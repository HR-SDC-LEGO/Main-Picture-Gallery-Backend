/* eslint-disable no-console */

const fs = require('fs');
const cvsWriter = require('csv-write-stream');

const writer = cvsWriter();
const faker = require('faker');

const data = () => {
  writer.pipe(fs.createWriteStream('dataProducts.csv'));
  for (let i = 0; i < 100; i += 1) {
    writer.write({
      product_name: faker.commerce.productName(),
    });
  }
  writer.end();
  console.log('done');
};

data();

// COPY products(product_name)
// FROM '/Users/sambrandon/Documents/SJO-3/PostGres Testing/Testing/dataProducts.csv'
// DELIMITER ','
// CSV HEADER;
