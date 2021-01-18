const faker = require('faker');
const { addImg, addProduct } = require('../database/index.js');

for (let i = 0; i < 2; i += 1) {
  const productName = faker.commerce.productName();
  const number = Math.floor(Math.random() * 5);
  addProduct(productName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Green product');
    }
  });

  for (let imgs = 0; imgs < number; imgs += 1) {
    const productImage = faker.image.cats();
    addImg(productImage, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Green img');
      }
    });
  }
}

// we need to generate the fake data, and but in in a obj
// we then pass in the fake data into the db
