// 3. Напишите функцию которая бы переворачивала предоставленную строку
//         Возможно, вам придется превратить строку в массив, прежде чем вы можете обратить его. 
//         Ваш результат должен быть строкой.
//         "something"

// 		"test" => "tset"

let ourString = "something";

function reverseString(str) {
    let arr = str.split("");
    arr.reverse();
    let resalt = arr.join('');
    console.log(resalt);
}

reverseString(ourString);