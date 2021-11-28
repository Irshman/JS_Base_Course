// 8.	Напишите функцию, которая принимает строку и удаляет в ней все дублирующиеся слова, оставляя тем самым только уникальные

//     Пример:

//     Input:
//     'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

//     Output:
//     'alpha beta gamma delta'

function uniqueWords(str) {
    let arr = str.split(" ");
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
        result.push(str);
    }
  }
  return result;
}

let unique = uniqueWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta');
console.log(unique);


