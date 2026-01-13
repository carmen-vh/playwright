const file = require('./json/bulbasaur.json');
const ejs = require('easy-json-schema');

const jsonSchema = ejs(file);
console.log(JSON.stringify(jsonSchema))
