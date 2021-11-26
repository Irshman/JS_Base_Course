// 3.	Заменить все элементы
//     Напишите функцию replaceAll, которая принимает первым параметром массив элементов, вторым параметром - элемент, который нужно заменить и третьим - 
//     элемент, который должен заменить второй элемент.
//     Пример:
//         replaceAll(array: [1,2,2], old: 1, new: 2) // [2,2,2]

var arr = [1, 2, 2];

function replaceAll(array, oldElem, newElem) {
    var elem = array.indexOf(oldElem);
    if (elem === -1) {
        alert("Error");
        return;
    } 
    array.splice(elem, 1, newElem);
    return array;    
}

var result = replaceAll(arr, 2, 3);
console.log(result);