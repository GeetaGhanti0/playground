
const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json').toString();
const readFileObject = JSON.parse(dataBuffer);

readFileObject.name = 'Geeta';
readFileObject.age = '35';

console.log(readFileObject);
fs.writeFileSync('1-json.json', JSON.stringify(readFileObject));
