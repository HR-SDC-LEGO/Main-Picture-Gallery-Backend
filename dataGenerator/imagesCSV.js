/* eslint-disable no-console */
const fs = require('fs');
const cvsWriter = require('csv-write-stream');

const writer = cvsWriter();
const faker = require('faker');

const fileGlobalArrPictures = [];

const dataImages = () => {
  writer.pipe(fs.createWriteStream('./CSV_files/dataImages2.csv'));
  for (let i = 5000000; i < 10000000; i += 1) {
    const random = Math.floor(Math.random() * 10);
    const test = `{${fileGlobalArrPictures[random]}}`;
    writer.write({
      product_image: test,
      product_id: i,
    });
    console.log(i);
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
  dataImages();
};
test();
