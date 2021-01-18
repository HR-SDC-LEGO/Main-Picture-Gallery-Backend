const faker = require('faker');
const { addToLEGO } = require('../database/index.js');

for (let i = 0; i < 1; i += 1) {
  const productName = faker.commerce.productName();
  const productImage = faker.image.cats();

  addToLEGO(productName, productImage);
}

// we need to generate the fake data, and but in in a obj
// we then pass in the fake data into the db
