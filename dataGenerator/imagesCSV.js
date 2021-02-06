/* eslint-disable no-console */
const fs = require('fs');
const cvsWriter = require('csv-write-stream');

const writer = cvsWriter();
const faker = require('faker');

const fileGlobalArrPictures = [];

const dataImages = (arr) => {
  writer.pipe(fs.createWriteStream('./CSV_files/dataImages.csv'));
  for (let i = 0; i < 100; i += 1) {
    const random = Math.floor(Math.random() * 100);
    const test = `{${arr[random]}}`;
    writer.write({
      product_image: test,
      product_id: i,
    });
  }

  writer.end();
  console.log('done with images');
};

const test = () => {
  for (let j = 0; j < 100; j += 1) {
    const temp = [];
    for (let i = 0; i < 10; i += 1) {
      temp.push(faker.image.cats());
    }
    fileGlobalArrPictures.push(temp);
  }
};
test()
  .then(dataImages());
