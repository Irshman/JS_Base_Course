// 2. Допишите функцию countOnline

//         let users = [
//             {
//                 age: 27,
//                 online: false
//             },
//             {
//                 age: 32,
//                 online: true
//             },
//             {
//                 age: 48,
//                 online: false
//             },
//             {
//                 age: 19,
//                 online: true
//             }
//         ];

//         function countOnline(arr) {}
//         console.log(countOnline(users));


let users = [
    {
        age: 27,
        online: false
    },
    {
        age: 32,
        online: true
    },
    {
        age: 48,
        online: false
    },
    {
        age: 19,
        online: true
    }
];

function countOnline(arr) {
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].online === true) {
            count++;
        }
    }
    return count;
}

let result = countOnline(users);
console.log(result);