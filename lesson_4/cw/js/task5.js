// 5.	Напишите функцию, которая сгенерирует массив рандомных чисел (на 10 элементов) от -10 до 10
// 			Выведите массив в консоль
// 			Посчитайте сумму позитивных чисел из массива и выведите ее в консоль

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getPositiveSome() {
    var randomArr = [];
    var sum = 0;

    for (var i = 0; i < 10; i++){
        var randomNum = getRandomArbitrary(-10, 10);
        randomArr.push(randomNum);
    }

    for (let i = 0; i < randomArr.length; i++){
        if (randomArr[i] > 0) {
            sum += randomArr[i];
        }
    }
    console.log(randomArr);
    console.log("Sum: " + sum);
  }

  getPositiveSome();

