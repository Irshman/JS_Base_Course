// 1.  Обрезать строку (первый аргумент), если она длиннее заданной максимальной длины строки (второй аргумент). Вернуть усеченную строку с ... окончанием.

        // function truncateString(str, num) {
        //     // your code here

        //     return str;
        // }

//         truncateString("A-tisket a-tasket A green and yellow basket", 8);


function truncateString(str, num) {
    if (str.length > num) {
      // var arr = str.split("");
      // console.log(arr);
      // var result = arr.splice(0, num);
      // console.log(result);
      // var a = result.join("");
      // a += "...";
      // return a; 
      return str.split("").splice(0, num).join("") + "..."; 
    }
    return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);