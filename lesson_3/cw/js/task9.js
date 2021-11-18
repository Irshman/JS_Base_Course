// 9. Давайте произведём 5 операций с массивом.

//     9.1 Создайте массив styles с элементами «Джаз» и «Блюз».
//     9.2 Добавьте «Рок-н-ролл» в конец.
//     9.3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     9.4 Удалите первый элемент массива и покажите его.
//     9.5 Вставьте «Рэп» и «Регги» в начало массива.

var style = ["Джаз", "Блюз"];

style.push("Рок-н-ролл");

console.log("Push:" + style);

var middleOfArray = Math.floor(style.length / 2);

console.log(Math.floor(middleOfArray));

style[middleOfArray] = "Классика";

console.log("Change:" + style);

var firstElem = style.shift();

console.log("Shift:" + style);

style.unshift("Рэп", "Регги");

console.log(style);