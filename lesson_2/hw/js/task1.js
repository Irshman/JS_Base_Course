// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные,
//  вывести сообщение "Ошибка". Числа принять от пользователя.

let num1 = +prompt("Enter num 1:");
let num2 = +prompt("Enter num 2:");
let num3 = +prompt("Enter num 3:");

if (num1 == num2 || num1 == num3 || num2 == num3) {
    alert("Error"); 
} else {
    let average = (num1 + num2 + num3) / 3;
    alert("Average: " + average);
}