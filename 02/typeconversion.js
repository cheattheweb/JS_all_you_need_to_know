var str = '1000';

var n = 10;

//Different JS engin can work differently so we have to convert data manually
console.log(str * n);
console.log(str + n);

// convert data manually
console.log(Number(str) + n);
console.log(Number(str) * n);

// convert a number in to sting 
console.log(n.toString());

//We can't convert every data into  every thing like:
console.log(Number(Infinity) + 10);

//But we can convert Infinity to Sting and Boolean
console.log(String(Infinity) + 10);

//JS takes Infinity as a true value
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));

// Falsy Values
 
//''
//0
//null
//undefined
//NaN

console.log(Boolean(''));
console.log(Boolean('arka'));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(45));
console.log(Boolean(0));

//Boolean can also be converted into string my toSting
var x = true;
console.log(x.toString());