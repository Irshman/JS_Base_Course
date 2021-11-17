// 10. Сумма введённых чисел

// Создайте массив
// Через цикл запрашивайте у пользователя цифры
// Заканчивайте запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитайте и верните сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».


// var myList = new Array();
// var elem;

// while (true) {
//     elem = prompt("Enter somethinh:" );
//     if (isNaN(elem)) {
//         break;
//     } 
//     if (!elem) {
//         break;
//     }
//     myList.push(+elem);
// }

// console.log(myList);



var arr = new Array();

do{
    var num = prompt("Введите число");
    if (num === ""|| num == null || isNaN(num)){
        break;
    } 
    
    arr.push(+num);   
} while (true);


console.log(arr);



// var myList = new Array();

// while (true) {
//     var elem = prompt("Enter somethinh:" );
//     debugger;
//     if (typeof elem == "string") {
//         break;
//     } 
//     if (typeof elem == "object") {
//         break;
//     }
//     myList.push(elem);
// }

// console.log(myList);