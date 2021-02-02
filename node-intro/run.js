
// console.log('hello node');

// npm - node package manager

// module - package - dependency

// dependency - all the code that i have not written but my app uses

// module (node internal) - package (coming from npm) 

const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');

console.log(randomString);

// importing a package from npm
const chalk = require('chalk');
// console.log(chalk.blue('Hello NPM'));


// here we import / require the add function from add.js
const addNumbers = require('./add');
const sum = addNumbers(3, 5);
console.log(sum);

// import functions from functions.js
// we can also import mutiple functions (coming from the object export in functions.js)

// we can require evrything at once as an object
// const functions = require('./functions');
// console.log(functions.greetFunction());

// or we can destructure exactly what we need
const { greetFunction } = require('./functions');
console.log(greetFunction());


// create a folder
// create an index.js
// npm init -y
// npm install one of the weird packages 
// run it
let nerds = require('nerds');

let singleHP = nerds.resolve('Harry Potter').asArray();
// console.log(singleHP);

// variables that you have access to
console.log(__dirname);
console.log(__filename);

// accessing parameters that are passed via the command line
console.log('this is the parameter you passed in', process.argv.slice(2));







