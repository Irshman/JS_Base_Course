// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
// Описание:
//     п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Honda", "Mercedes"];
//     п.2 Запросите у пользователя название элемента массива
//     п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
//     п.3.2 Если в массиве такого элемента нет - добавить в конец массива
//     п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
//     п.5 Запросите у пользователя новый элемент для массива только в случае если предыдущий элемент был найден и вставьте его после найденного элемента.


var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Honda", "Mercedes"];

var inputCar = prompt('Введите елмент');
var inputNewElem;

if (cars.includes(inputCar)) {
    inputNewElem = prompt(`Введите елмент который хотите добавить после елемента - ${inputCar}`);
    
    var i = cars.indexOf(inputCar);

    cars.splice(i + 1, 0, inputNewElem);
} else {
    inputNewElem = prompt("Введите елмент который хотите добавить в конец масива:");
      
    cars.push(inputNewElem);
}

console.log(cars);
