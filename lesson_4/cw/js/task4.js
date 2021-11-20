// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении. 
//         Ваш ответ должен быть числом.
//         "The quick brown fox jumped over the lazy dog" => 6
		


function returnMaxString(str) {
    var myArray = str.split(" "); 
    var max = 0;
    console.log(myArray);
    
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].length > max) {
            max = myArray[i].length;
        }
    }
    console.log(max);
    return max;
}

returnMaxString("The quick brown fox jumped over the lazy dog");