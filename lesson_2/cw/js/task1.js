// 1. Напишите цепочку операторов if / else if, чтобы выполнить следующие условия (num вводит пользователь), результат вывести в консоль:
//             num < 5 - "Tiny"
//             num < 10 - "Small"
//             num < 15 - "Medium"
//             num < 20 - "Large"
//             num >= 20 - "Huge"


let num = +prompt("Введіть num: ");

if(num < 5) {
    console.log("Tiny");
} else if(num < 10) {
    console.log("Small");
} else if(num < 15) {
    console.log("Medium");
} else if(num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}