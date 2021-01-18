const faker = require('faker');
const { addImg, addProduct } = require('../database/index.js');

for (let i = 0; i < 100; i += 1) {
  const productName = faker.commerce.productName();

  addProduct(productName, (err, productData) => {
    if (err) {
      console.log(err);
    } else {
      const id = productData.insertId;
      const number = Math.floor(Math.random() * 20);
      for (let imgs = 0; imgs < number; imgs += 1) {
        const productImage = faker.image.cats();
        addImg(productImage, id, (error) => {
          if (error) {
            console.log(error);
          } else {
            // console.log('Green img');
          }
        });
      }
    }
  });
}

// we need to generate the fake data, and but in in a obj
// we then pass in the fake data into the db
