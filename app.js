// const fs = require('fs')

// // fs.writeFileSync('notes.txt', 'This file was created by node.js!')

// fs.appendFileSync('notes.txt', "let's see how this goes!")

const getNotes = require('./notes.js')

const msg = getNotes()

console.log(msg)