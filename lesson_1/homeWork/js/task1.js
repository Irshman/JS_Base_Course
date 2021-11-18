// 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, проходящей через эти точки.
//     Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.

let x1 = prompt("Enter the coordinate x1:" );
let x2 = prompt("Enter the coordinate x2:" );
let y1 = prompt("Enter the coordinate y1:" );
let y2 = prompt("Enter the coordinate y2:" );

console.log(x1, x2, y1, y2);

// Вычислим значение k по формуле k = (y1 — y2) / (x1 — x2).

let k = (y1 - y2) / (x1 - x2);

// Вычислим значение b по формуле b = y2 — k * x2.

let b = y2 - k * x2;

// Общий вид уравнения: y = kx + b;

console.log("y = " + k + "x + " + b);
alert("Рівняння має вигляд: " + "y = " + k + "x + " + b)