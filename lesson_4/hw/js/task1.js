// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// Функция должна проверять корректность введенных чисел и знака операции.
// Все аргументы для функции принять от пользователя.

function calculate(a, b, sign) {

    if (isNaN(a) || isNaN(b) ) {
        alert("Error");
        return;
    }

    switch (sign) {
        case "+":
            console.log(`Відповідь: ${a} + ${b} = ${a + b}`);
            break;
        case "-":
            console.log(`Відповідь: ${a} - ${b} = ${a - b}`);
            break;
        case "/":
            console.log(`Відповідь: ${a} / ${b} = ${a / b}`);
            break;
        case "*":
            console.log(`Відповідь: ${a} * ${b} = ${a * b}`);
            break;
    
        default:
            console.log("Такой опирации нет");
            break;
        }
    
}

let num1 = +prompt("Введіть перше число:");
let num2 = +prompt("Введіть друге число:");
let sign = prompt("Введіть арфетичну операції (Наприклад: +, -, /, *)");

calculate(num1, num2, sign);
