// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'This file was created by node.js!')

// fs.appendFileSync('notes.txt', "let's see how this goes!")

const add = require('./utils.js')

const sum = add(4, -2)

console.log(sum)