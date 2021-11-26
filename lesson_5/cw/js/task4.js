
        // 4.  Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.


function isEmpty(obj) {
    for (var key in obj) {
        return console.log(false);
    }
    return console.log(true);
}

var car = {};

isEmpty(car);