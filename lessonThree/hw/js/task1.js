// 1. Сделать собственные примеры методов применяемых для массивов.

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

myArray.push(15); // Добавлено 15 в конец масива 

let lastDel = myArray.pop(); // Удален последний елемент масива
console.log(`Удален последний елемент масива - ${lastDel}`);

let firstDel = myArray.shift(); //Удален первий елемент масива
console.log(`Удален первий елемент масива - ${firstDel}`);

myArray.unshift(23); // добавляет в начало 23
console.log( `Длина масива - ${myArray.length} елементов` ); // Возвращает длину масива 
console.log( myArray );

let spliceDel = myArray.splice(2, 3); //Удаляет 3 елемента начиная с 2 и тд...
console.log("Splice удал эти елементи: " + spliceDel);

let sortArr = myArray.sort(function (a, b) { return a - b; }); //сортирует масив по возростанию
console.log("Отсортирований масив: ");
console.log(sortArr);

let reverseArr = myArray.reverse(); // Делает риверс масива масив начинаеться с конца 
console.log("Риверс масив: ");
console.log(reverseArr);

let strArr = myArray.join(); // Превращает масив в строку 
console.log(`Превращает масив в строку - ${sortArr}`);

let splitArr = strArr.split(","); // Превращает строку в масив
console.log(`Превращает строку в масив - ${splitArr}`);


var fruits = ["яблоко", "груша", "слива", "апельсин"];
var vegetables = ["капуста", "морковка", "картошка"];

let concatArr = fruits.concat(vegetables); // объедину два массива
console.log(concatArr);


