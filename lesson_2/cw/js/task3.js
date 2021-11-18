// 3. Перепишите с тернарным оператором
//             if (a > b) {
//                 max = a;
//             } else {
//                 max = b;
//             }
            
//             console.log(max);

let a = +prompt("a = ");
let b = +prompt("b = ");

let max = a > b ? a : b;

console.log(max);