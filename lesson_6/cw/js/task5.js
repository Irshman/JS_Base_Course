// 5.	У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён..

    // let vasya = { name: "Вася", age: 25 };
    // let petya = { name: "Петя", age: 30 };
    // let masha = { name: "Маша", age: 28 };

//     let users = [ vasya, petya, masha ];

//     let names = /* ... ваш код */

//     alert( names ); // Вася, Петя, Маша

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

console.log(user);

let names = [];
for (var i = 0; i < user.length; i++) {
    names.push(user[i].name);
}

console.log(names);