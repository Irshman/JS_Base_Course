// 1.  Объект user содержит три свойства. Свойство data содержит пять свойств, 
// один из которых содержит массив friends. Завершите запись функции addFriend,
// которая принимает объект user и имя друга(friend), и добавляет имя друга(friend) в массив friends. 
// Функция должна возвращать массив friends.

    // let user = {
    //     name: 'Kenneth',
    //     age: 28,
    //     data: {
    //         username: 'kennethCodesAllDay',
    //         joinDate: 'March 26, 2016',
    //         organization: 'freeCodeCamp',
    //         friends: [
    //             'Sam',
    //             'Kira',
    //             'Tomo'
    //         ],
    //         location: {
    //         city: 'San Francisco',
    //         state: 'CA',
    //         country: 'USA'
    //         }
    //     }
    // };

    // function addFriend(userObj, friend) {
    //     // your code here
    // }
    // console.log(addFriend(user, 'Pete'));


    let user = {
        name: 'Kenneth',
        age: 28,
        data: {
            username: 'kennethCodesAllDay',
            joinDate: 'March 26, 2016',
            organization: 'freeCodeCamp',
            friends: [
                'Sam',
                'Kira',
                'Tomo'
            ],
            location: {
            city: 'San Francisco',
            state: 'CA',
            country: 'USA'
            }
        }
    };

    function addFriend(userObj, friend) {
        let arr = [];
        arr = userObj.data.friends.push(friend);
        return arr;
    }

let result = addFriend(user, 'Pete');
console.log(result);