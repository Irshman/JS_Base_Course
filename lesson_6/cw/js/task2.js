// 2. Каждое число в квадрат
// Напишите функцию, которая принимает число и возводит каждую цифру этого числа в квадрат.
// Пример:
// squareDigits(9119) //811181 так как 9^2 равно 81 и 1^2 равно 1.

function squareDigits(num) {
    // var str = num.toString();
    // var arr = str.split("");
    // var result = "";
    // for (let i = 0; i < arr.length; i++) {
    //     result += arr[i] * arr[i];
    // }
    // console.log(result);
    return num.toString().split("").map(item => item * item).join("");
}

var result = squareDigits(9119);
console.log(result);