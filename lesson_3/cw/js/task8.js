
// 8. Создайте список покупок в переменной myList. Список должен быть многомерным массивом, содержащим несколько подмассивов.
// Первый элемент в каждом подмассиве должен содержать строку с именем элемента. Второй элемент должен быть числом, представляющим цену, т.е.
// [«Шоколадная плитка», 15]
// В списке должно быть не менее 5 подмассивов.
// Выведите в консоль список всех покупок без цен
// Используйте методы добавления удаления элементов из массива


var myList = [
    ["Шоколадная плитка", 15],
    ["Шоколадка", 3],
    ["test1", 16],
    ["test2", 5],
    ["test3", 8]
]

myList.push(["test4", 22]);

myList.shift();

console.log(myList);

for (var i = 0; i < myList.length; i++) {
    console.log(myList[i][0]);
}

