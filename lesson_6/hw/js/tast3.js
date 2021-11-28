// 3. Используйте метод some внутри функции checkPositive, чтобы проверить,
//  является ли какой-либо элемент в arr положительным. 
//  Функция должна возвращать логическое значение.

        // function checkPositive(arr) {}
        // checkPositive([1, 2, 3, -4, 5]);


var array = [1, 2, 3, -4, 5];

var res = array.some(checkPositive);

function checkPositive(item) {
    return item > 0;
}

console.log(res);