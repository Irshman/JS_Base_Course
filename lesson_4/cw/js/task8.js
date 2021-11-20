// 8.	Сумма в диапазоне
		
// 			Напишите 2 функции.
// 			Первая функция генерирует массив на N рандомных чисел в диапазоне от A до B и возвращает его 
// 			Т.е. принимает 3 параметра и А не может быть больше чем B
// 			Например: doSmth(8, 1, 10) -> [3, 2, 5, 4, 7, 1, 3, 10]
			
// 			Вторая функция принимает массив рандомных чисел, индекс С которого начинать подсчет и индекс ПО который считать
// 			Должна быть валидация индексов
// 				- Чтобы не было отрицательных чисел
// 				- Чтобы индекс не выходил за рамки допустимых индексов
// 				- Чтобы первый индекс был меньше или равен второму
			
// 			Пример вывода в консоль:
// 			Массив: [.....] сгенерированный от A до B
// 			Сумма чисел в диапазоне от индекса C по индекс D равна: 10

// var a = +prompt("A = ");
// var b = +prompt("B = ");


var a = 1;
var b = 10;
var num = 10;


function getRandomArr(num, a, b) {
    var randomArr = [];

    for (var i = 0; i < num; i++) {
        var randomNum = Math.floor(Math.random() * (b - a) + a);
        randomArr.push(randomNum);
    }
    console.log(`Массив: ${randomArr} сгенерированный от A до B`);
    return randomArr;
}

var myArray = getRandomArr(num, a, b);


function calcIntervalArr(arr, c, d) {

    if (c < 0 || d < 0 || c > d || c < a || d > b) {
        console.log("Eror");
    } else {        
        var intervalArray = arr.slice(c, d);
        var sum = 0;

        console.log(`Диапазон чисел: ${intervalArray}`);
        
        for (let i = 0; i < intervalArray.length; i++) {
            sum += intervalArray[i];
        }
        console.log(`Сумма чисел в диапазоне от индекса C по индекс D равна: ${sum}`);
    
    }
    
    return sum;
}

calcIntervalArr(myArray, 2, 6);
