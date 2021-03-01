// Log to Console
console.log('Hello World!'); // String
console.log(123); // numbers
console.log(true); // boolean
var $greeting = 'Hello'; // variables
console.log($greeting);
console.log([1,2,3,4,5]); // arrays number
console.log({a:1, b:2}); // object littreal

console.table({a:1, b:2}); // object with  table

console.error('This is some error'); //errror
// console.clear(); // clear
console.warn('This is warning'); // warning
console.time('Hello'); //Timer Start 
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
  console.log('Hello World!');
console.timeEnd('Hello'); //Timer end
/*
Multi line comments
*/

// Var, Let, Const

// var name = 'Bakibillah Sakib';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// //Init Var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// // Letters, Numbers, _, $
// // Cannot start with number
// // var 1name = 'John'; // Wont' work

// //multi word variables

// var firstName = 'John' // camel case
// var first_name = 'Sadid' //underscore
// var FirstName = 'Sakib' //Pascal Case
// var fristname = 'Lowercase' //lower case 

// LET  
// let name;
// name = 'Bakibillah Sakib';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

//CONST
// const name = 'John';
// console.log(name);
// Can not reassign
// name = 'Sara';
// Have to assign a value
// const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }
// person.name = 'Sara';
// person.age = 32;

// // console.log(person);
// const numbers = [1,2,1,3,4,5];
// numbers.push(6); // Mutating to array on CONST Variables.
// numbers.push(7); // Mutating and Adding.
// // numbers = [1,2,1,3,4,5]; We are not mutating we are assigning and that's not possible in Const Variables

// console.log(numbers);

// Data Types
// 1. Primitive Data Type 

// String
// Number
// Boolean
// Null
// Undefined
// Symbols(ES6)

// 2.Reference Data Type / Object 

// Arrays
// Object Literals
// Functions
// Dates
// Anything else...

//PRIMITIVE

// // String
// const name = 'John Doe';
// // Number 
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbols
// const sym = Symbol();

// // REFERENCE TYPES - Objects

// // Array
// const hobbies = ['movies', 'music'];
// // Object Literal
// const address = {
//   city: 'Mymensingh',
//   state: 'mym'
// }
// // Dates
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// TYPE CONVERTION

// let val;

// // NUMBER TO STRING
// val = String(555);
// val = String(4+4);

// // Boolean to string
// val = String(true);
// // Date to string
// val = String(new Date());
// // Array to string
// val = String([1,2,3,5,4,6]);
// // toString()
// val = (5).toString();
// val = (true).toString();


// // STRING TO NUMBER
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello'); //NaN (Not A Number)
// val = Number([1,2,3,4]); //NaN (Not A Number)

// val = parseInt('100.30');
// val = parseFloat('100.31');

// // output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed());

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// // Numbers The Math Object

// const num1 = 100;
// const num2 = 50;

// let val;

// // Simple mathe with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8,2);
// val = Math.min(2,3,4,58,74,1,6,-2);
// val = Math.max(2,3,4,58,74,1,6,-2);
// val = Math.random();

// val = Math.floor(Math.random() * 20+1);

// console.log(val);

// String Cancanation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 30;
// const str = 'Hello there my name is Sakib'
// const tags = 'web desin, web developement, frontend, design, programming'


// let val;

// val = firstName + lastName;

// // Concatenation

// val = firstName + ' ' + lastName;

// // Append
// val = 'Bakibillah ';
// val += 'Sakib';

// val = 'Hello, my name is ' + firstName + 'and I am ' + age;

// // Escaping
// val = 'That\'s Awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);


// // Change case upper
// val = firstName.toUpperCase();
// val = lastName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');

// // Get the last char
// val = firstName.charAt(firstName.length - 1);

// // Substring()
// val = firstName.substring(0, 4);

// // Slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // Split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Sakib', 'Bakibillah');

// // include()
// val = str.includes('Hello');
// val = str.includes('foo');

// console.log(val);




// Template Literal
// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Mymensingh';

// // Without template string (ES5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//        '<li>Name: ' + name + '</li>' +
//        '<li>Age: ' + age + '</li>' +
//        '<li>Job: ' + job + '</li>' +
//        '<li>City: ' + city + '</li>';


// function hello(){
//   return 'hello';
// }

// // With Template strings (ES6)
// html = `
//     <ul>
//      <li>Name: ${name} </li> 
//      <li>Age: ${age} </li> 
//      <li>Job: ${job} </li> 
//      <li>City: ${city} </li> 
//      <li>Math: ${2 + 2} </li> 
//      <li>Function: ${hello()} </li>
//      <li>Check: ${age > 30 ? 'Over 30' : 'Under 30'} </li>
//     </ul>
// `;

// document.body.innerHTML = html;



// Arrays

// Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana','Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get a single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS

// Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take of from end
// numbers.pop();
// // Take of from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse Array
// numbers.reverse();
// Concatenate Array
// val = numbers.concat(numbers2);
//Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

//Use the "compare function"

// val = numbers.sort(function(x, y){
//   return x - y;
// });

// //Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find 
// function under50(num){
//   return num < 50;
// }

// function over50(num){
//   return num > 50;
// }


// val = numbers.find(under50);
// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);


//Object Literals

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'sakib192@gmail.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function(){
//     return 2021 - this.age;
//   }
// }

// let val;

// val = person;
// //Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 23},
//   {name: 'Sakib', age: 31}
// ]

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }



// Dates & Objects

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1991 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');


// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);



// If statements

// if (something) {
//   do something
// } else {
//   do something else
// }

// const id = 100;

// //EQUAL TO
// if(id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }


// // EQUAL TO VALUE AND TYPE
// if(id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if(id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// }else{
//   console.log('NO ID');
// }

// GREATER OR LESS THEN
// if(id <= 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// IF ELSE

// const color = 'yellow';

// if(color === 'red') {
//   console.log('Color is RED');
// } else if(color === 'blue') {
//   console.log('Color is BLUE');
// } else {
//   console.log('Color is not RED or BLUE');
// }

// LOGICAL OPERATORS
// const name = 'Sakib';
// const age = 70;

// AND &&
// if(age > 0 && age < 12) {
//   console.log(`${name} is a CHILD`);
// } else if (age >=13 && age <= 19) {
//   console.log(`${name} is a TEENAGER`);
// } else {
//   console.log(`${name} is a ADULT PERSON`);
// }

// OR ||

// if(age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is a registered for the race`);
// }

// // TERNARY OPERATORS
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACKETS

// if(id === 100)
//   console.log('CORRECT');
// else 
//   console.log('INCORRECT');


// SWITCHES

// const color = 'yellow';

// switch(color) {
//   case 'red':
//     console.log('Color is RED');
//     break;
//   case 'blue':
//     console.log('Color is BLUE');
//     break;
//   default:
//     console.log('Color is not RED or BLUE');
//     break;
// }

// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
//     break;
// }

// console.log(`Today is ${day}`);





// Function Declaration

// function greet(firstName = 'John', lastName = 'Doe'){
//   // if(typeof firstName === 'undefined'){firstName = 'John'} - ES5
//   // if(typeof lastName === 'undefined'){lastName = 'Doe'} - ES5
//   // console.log('Hello');
//   return 'Hello ' + firstName + ' ' + lastName;
// }


// // console.log(greet());

// // Function expression

// const square = function(x = 3){
//   return x*x;
// };

// // console.log(square());

// // IMMIDIATELY INVOKABLE FUNCTIONS -- IIFEs

// // (function(){
// //   console.log('IIFE Ran..');
// // })();

// // (function(name){
// //   console.log('Hello '+ name);
// // })('Brad');

// // PROPERTY METHODS

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log('Delete todo...');
// }


// todo.add();
// todo.edit(22);
// todo.delete();



// General Loops

// FOR LOOPS
// for(let i = 0; i < 10; i++){
//   // i = i + 1 -- i++
//   //console.log('Number ' + i);
//   if(i === 2){
//     console.log('Number 2 is not my favourite number');
//     continue;
//   }

//   if(i === 5){
//     console.log('Stopped the loop');
//     break;
//   }

//   console.log('Number ' + i);
// }

// WHILE LOOPS
// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE LOOPS (Always Gonna Run)

// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

//LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// cars[1];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

//WHILE LOOP

// let i = 0;

// while(i < cars.length){
//   console.log('While loop running on ' + cars[i]);
//   i++;
// }

// DO WHILE LOOP

// let i = 0;

// do{
//   console.log('Do loop running on ' + cars[i]);
//   i++;
// }

// while(i < cars.length);

// FOREACH ARRAY LOOP
// cars.forEach(function(car, index, array){
//   console.log(`${index} : ${car}`);
//   console.log(array);
// });

// MAP

// const users = [
//   {id: 1, Name: 'John'},
//   {id: 2, Name: 'Sakib'},
//   {id: 3, Name: 'Sadid'},
//   {id: 4, Name: 'Nasif'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// FOR IN LOOP

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }




// WINDOW METHODS / OBJECT / PROPERTIES

// window.console.log(123);

// ALERT
// window.alert('Hello World!');
// alert('Hello World!');

// Prompt
// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure?')){
//   console.log('YES');
// }else {
//   console.log('NO');
// }

// Properties

// let val;

// Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// Inner height and width
// val = window.innerHeight;
// val = window.innerWidth;

// Scroll Points
// val = window.scrollY;
// val = window.scrollX;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://google.com';
// // Reload
// window.location.reload();

// History Object
// window.history.go(-0);
// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.geolocation;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);


// Global Scope

// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Function Scope: ', a, b, c);
// }

// test();

// Block Scope

// if(true){
//   //Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If Scope: ', a, b, c);
// }

// for(var a = 0; a < 10; a++){
//   console.log(`Loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);



//DOM Manipulation
// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//   console.log(script.getAttribute('src'));
// });

// console.log(val);



// document.getElementById()
// console.log(document.getElementById('task-title'));

//Get thing from the element

// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// Change Styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '10px';
// taskTitle.style.display = 'none';

// Change Content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My List';
// taskTitle.innerHTML = '<span style="color:red;">My List</span>';

// document.querySelector();
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// //DOM LIST
// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World!';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';



