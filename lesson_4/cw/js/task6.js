// 6.	Напишите функцию, которая сгенерирует массив рандомных чисел (кол-во элементов в массиве вводит пользователь) от -10 до 10
// 			Определите наименьшее и наибольшее число в массиве.
// 			Массив, минимальное и максимальное число - вывести в консоль.

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomArr() {
    var randomArr = [];
    var max = 0;
    var min = 0;

    var num = +prompt("Enter num for array")

    for (var i = 0; i < num; i++) {
        var randomNum = getRandomArbitrary(-10, 10);
        randomArr.push(randomNum);
    }

    for (var i = 0; i < randomArr.length; i++) {
        if (randomArr[i] > max) {
            max = randomArr[i];
        }
        if (randomArr[i] < min){
            min = randomArr[i];
        }
    }

    console.log("Array: " + "\n" + randomArr);
    console.log("Max: " + max);
    console.log("Min: " + min);

}


getRandomArr();
