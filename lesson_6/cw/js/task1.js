// 1.	Часы
// 	Напишите функцию, которая принимает на вход количeство часов, минут и секунд, и преобразует полученное время в миллисекунды.
//	Пример:
//	past(0, 1, 1) == 61000
		
function past(hour = 0, minutes = 0, seconds = 0) {
    return (hour * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
}

let result = past(23, 59, 55);