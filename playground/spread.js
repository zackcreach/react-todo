// function add(a, b) {
//   return a + b;
// };
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Skylar', 'Abbey'];
// var groupB = ['Colby'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Zack', 30];
var personTwo = ['Skylar', 25];

function Greeting(name, age) {
  console.log('Hi ' + name + ', you are ' + age)
};

Greeting(...person);
Greeting(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Zack', ...names];

final.forEach( function(name) {
  console.log('Hi ' + name);
});
