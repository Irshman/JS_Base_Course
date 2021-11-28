// 6.	У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// 			Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

			// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
			// let petya = { name: "Петя", surname: "Иванов", id: 2 };
			// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// 			let users = [ vasya, petya, masha ];

// 			let usersMapped = /* ... ваш код ... */

// 			/*
// 			usersMapped = [
// 			{ fullName: "Вася Пупкин", id: 1 },
// 			{ fullName: "Петя Иванов", id: 2 },
// 			{ fullName: "Маша Петрова", id: 3 }
// 			]
// 			*/

let users = [
    { 
        name: "Вася",
        surname: "Пупкин",
        id: 1
    },
    { 
        name: "Петя",
        surname: "Иванов",
        id: 2
    },
    { 
        name: "Маша",
        surname: "Петрова",
        id: 3 
    }
]

let newUsers = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }));

console.log(newUsers);