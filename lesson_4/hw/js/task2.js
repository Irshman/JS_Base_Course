// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// Проверить числа на корректность

function power(a, x) { 
    let result = a;
    for (let i = 1; i < x; i++) {
        result *= a;
    }
    return result;
}


console.log(power(5, 3));