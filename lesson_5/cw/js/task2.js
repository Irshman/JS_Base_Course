// 2.  Создайте функцию, которая просматривает массив (первый аргумент) и возвращает первый элемент в массиве, который проходит проверку на истинность (второй аргумент). 
//         Если ни один элемент не проходит тест, вернуть undefined.

//         function findElement(arr, func) {
//             return item;
//         }

function findElement(arr, func) {
    for (var i = 0; i < arr.length - 1; i++) {
        if(func(arr[i])){
            return arr[i];
        }
    }
}

var specialFunk = function(num) {return num % 2 === 0};
findElement([1, 2, 3, 4], specialFunk);
