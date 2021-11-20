// 1. Напишите функцию, которая принимает массив в качестве аргумента. 
//         Используя slice(), извлеките информацию из массива аргументов и верните новый массив, содержащий элементы «warm» и «sunny».

//         ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']

let myArray = ['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms'];

function returnSubArr(arr) {
    let subArr = arr.slice(2, 4);
    console.log(subArr);
    return subArr;
}

returnSubArr(myArray);