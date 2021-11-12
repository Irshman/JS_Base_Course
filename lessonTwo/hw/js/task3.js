// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

let num1 = +prompt("Enter num 1:");
let num2 = +prompt("Enter num 2:");
let num3 = +prompt("Enter num 3:");

let max;

if(num1 > num2 && num1 > num3) {
    max = num1;
    alert("Max is num 1 = " + max); 
} else if (num2 > num1 && num2 > num3) {
    max = num2;
    alert("Max is num 2 = " + max); 
} else {
    max = num3;
    alert("Max is num 3 = " + max); 
}

