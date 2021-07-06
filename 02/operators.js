// Arithmetic Operators
// + - * / ++ --

var a = 13;
var b = 6;

console.log(a % b);

// Incremental
// Pre Incremental
console.log(++a);

// Post Incremental
console.log(a++);
console.log(a);

//Decremental
// Pre Decremental
console.log(--b);

// Post Decremental
console.log(b--);
console.log(b);

/****** Assignment operator *****/
// = , += , -=, *=, /=, %= 
a +=b;

console.log(a);

a -= b;
console.log(a);

a *= b;
console.log(a);

a %= b;
console.log(a);

// Comparison Operators
// ==,!=,===,!==, <, >, <=, >=

var x = 5;
var y = 10;

console.log(x == y); // false
console.log(x != y); // true

console.log(x > y); //false
console.log(x < y); //true

console.log(x >= y);
console.log(x <= y);

var c = '10';
var d = 10;
console.log(c == d);

console.log(c === d);
console.log(c !== d);

// Logical Operators
// &&, ||, ! .

console.log(typeof 10)
console.log(typeof 'strings')