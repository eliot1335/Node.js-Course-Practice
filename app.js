// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'This file was created by node.js!')

// fs.appendFileSync('notes.txt', "let's see how this goes!")

const chalk = require("chalk")
const validator = require("validator")
const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)

console.log(validator.isEmail("eliottesttest@gmail.com"))
console.log(validator.isURL("https://www.npmjs.com"))
console.log(chalk.green.bold("show me the green!"))

console.log(process.argv[2])