const fs = require('fs');
const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday'
};

const bookJSON = JSON.stringify(book);
fs.writeFileSync('1-json.json', bookJSON);


// Examples:
// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);