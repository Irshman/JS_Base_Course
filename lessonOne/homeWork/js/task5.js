// 5. Запросите у пользователя его возраст, после чего выведите на экран модальное окно с вопросом:
//  "Ваш возраст ...(введеное пользователем число) лет?". 
//  Далее в зависимости от выбора пользователя выводится модальное окно с информацией true или false.

let age = prompt("Enter your age:" );
let answer = confirm(`Ваш возраст ${age} лет?`);

alert(answer);