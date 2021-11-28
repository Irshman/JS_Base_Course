// 7.	Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
//     Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

//     let vasya = { name: "Вася", age: 25 };
//     let petya = { name: "Петя", age: 30 };
//     let masha = { name: "Маша", age: 29 };

//     let arr = [ vasya, petya, masha ];

//     alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

let user = [
    {
        name: "Вася", 
        age: 25  
    },
    { 
        name: "Петя",
        age: 30 
    },
    { 
        name: "Маша", 
        age: 28
    },
]

function getAverageAge(users) {
    var averageAge = 0;
		for (var i = 0; i < users.length; i++) {
			averageAge += users[i].age;
		}
        averageAge = Math.floor(averageAge / users.length);
    return averageAge;
}

let result = getAverageAge(user);
console.log(result);