// 7. Напишите код, который будет спрашивать логин с помощью prompt.

// 			Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// 			Пароль проверять так:
// 			Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 			Иначе – «Неверный пароль»,
// 			При отмене – «Отменено».
			
// 			Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''. Нажатие клавиши Esc во время запроса возвращаетnull.


let login = "Админ";
let password = "Я главный";

let userLogin = prompt("Enter login:");

if (userLogin == login) {

    let userPassword = prompt("Enter password:");

    if (userPassword == password) {
        alert("Hello");
    } else if (userPassword !== password) {
        alert("Wrong password");
    } else {
        alert("Canceled");
    }
} else if (userLogin == " " || userLogin == null) {
    alert("Canceled");
} else {
    alert("Wrong login");
}
