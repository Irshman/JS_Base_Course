// 2. Напишите функцию подсчета градусов Фаренгейта при входящем параметре температуры в цельсиях.
//         Алгоритм пересчета из градусов Цельсия в градусы Фаренгейта - это температура в градусах Цельсия, умноженная на 9/5 плюс 32.

let grad = +prompt("Enter gradus Celsium");

function returnFarengete(grad) {
    let far = (grad * (9 / 5) + 32);
    console.log(far);
    return far;
}

returnFarengete(5);