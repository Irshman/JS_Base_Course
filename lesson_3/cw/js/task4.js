		// 4. Добавьте ["dog", 3] в конец переменной myArray и выведите в консоль.
		// 	Выведите в консоль первый элемент в каждом вложенном массиве.

		// // Setup
		
		
		var myArray = [["John", 23], ["cat", 2]];

		// myArray.push(["dog", 3]);
		var subArray = ["dog", 3];
		var test = myArray.concat(subArray);
	

		console.log(test);
