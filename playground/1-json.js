const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json'); // Returns binary
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);

// Examples:
// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday'
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// Create JSON file
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
