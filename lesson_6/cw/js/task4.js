// 4.	Напишите функцию, которая будет обрабатывать url, удаляя в нем всё после знака #
// Примеры:
// // returns 'www.codewars.com'
// removeUrlAnchor('www.codewars.com#about')
// // returns 'www.codewars.com?page=1' 
// removeUrlAnchor('www.codewars.com?page=1')

function removeUrlAnchor(str) {
    var index = str.indexOf('#');
    if (!index) {
        return str;
    }
    var arr = str.split("");
    arr.splice(index);
    return arr.join("");
    
}

var a = removeUrlAnchor("www.codewars.com#about");
var b = removeUrlAnchor('www.codewars.com?page=1');
console.log(a);
console.log(b);