// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный элемент массива заполнить подмассивом со значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.

//     Для массива размером 3
//     ['odd', 'odd', 'odd']       // 1й элемент
//     ['even', 'even', 'even']    // 2й элемент
//     ['odd', 'odd', 'odd']       // 3й элемент

//     let arr = [
//         ['odd', 'odd', 'odd'],
//         ['even', 'even', 'even'],
//         ['odd', 'odd', 'odd']
//     ]

let sizeArr = +prompt();

let myArray = new Array(sizeArr);

for (let i = 0; i < myArray.length; i++) {
    if (i % 2 === 0) {
        myArray[i] = new Array("even", "even", "even");
    } else {
        myArray[i] = new Array("odd", "odd", "odd");
    }
}

console.log(myArray);