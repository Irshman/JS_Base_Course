// 2. Обменять значения двух переменных, используя третью (буферную) переменную. Вывести значение переменных до и после обмена. 

// a: 5
// b: 7

// a: 7
// b: 5

let a = 5;
let b = 7;
let temp = a;

console.log("Before:");
console.log("a = " + a);
console.log("b = " + b);

a = b;
b = temp;

console.log("After:")
console.log("a = " + a);
console.log("b = " + b);
