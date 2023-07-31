// const fs = require('fs');


//First Content
// fs.writeFileSync('./data.txt', 'Hello there')

//Second content
// fs.writeFileSync('./data.txt', 'How are you')

// The second content overwrites the first content



// console.log(fs.readFileSync('./data.txt', 'utf-8')); 


// Append new content
// fs.appendFileSync('./data.txt', '\nMy name is Mish-Al');

// content is added in the same line as previous content

// use \n to add to a new line 

const Person = require('./person.js');

const person1 = new Person('Jason', 'Barron', 'jasonbarron@gmail.com');
const person2 = new Person('Uthmaan', 'Samsodien', 'uthmaansamsodien@gmail.com');
const person3 = new Person('Imtiyaaz', 'Damon', 'imtiyaazdamon@gmail.com');

console.log(person1);
console.log(person2);
console.log(person3);