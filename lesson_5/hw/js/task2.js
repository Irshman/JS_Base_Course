// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.

var calculator = {
    sum(a, b) {
        return a + b
    },

    subtract(a, b) {
        return a - b
    },

    multiplication(a, b) {
        return a * b
    },
    
    division(a, b) {
        return a / b
    }

}

var action = prompt("Введіть дію:");
var num1 = +prompt("Введіть перше число:");
var num2 = +prompt("Введіть друге число:");

switch (action) {
    case "+":
        alert('Ввідповідь: ' + calculator.sum(num1, num2));
        break;
    case "-":
        alert('Ввідповідь: ' + calculator.subtract(num1, num2));
        break;
    case "*":
        alert('Ввідповідь: ' + calculator.multiplication(num1, num2));
        break;
    case "/":
        alert('Ввідповідь: ' + calculator.division(num1, num2));
        break;
    default:
        alert("Такой дії нема");
        break;
}