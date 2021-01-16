/* eslint-disable no-console */

const { connection } = require('./dbKey.js');

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('the conected to the db');
  }
});

connection.query('SELECT 1 + 1 AS solution', (error, results) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
