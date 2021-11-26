// 5. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.
           
//        // sort(function(a, b) { return a > b });
//        // 1, 2, 3, 5, 10, 14
//        // 1, 10, 14, 2, 3,

function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].occupation == "director") {
            arr[i].salary = 3000;
        } else if (arr[i].occupation == "manager") {
            arr[i].salary = 1500;
        }    else if (arr[i].occupation == "programmer") {
            arr[i].salary = 2000;
        } else {
            arr[i].salary = 1000;
        }
    }
}

var amountPersons = +prompt("Enter how many people do you want to add: ")
var company = new Array(amountPersons);

for (var i = 0; i < company.length; i++) {
    company[i] = 
         {
            name: a = prompt("Enter first name:"), 
            sName: b = prompt("Enter surname:"),
            age: c = prompt("Enter age:"),
            occupation: d = prompt("Enter occupation:"),
            show: function() {
                console.log("First name: " + this.name);
                console.log("Surname: " + this.sName);
                console.log("Age: " + this.age + " years old");
                console.log("Occupation: " + this.occupation);
                console.log("Salaty: " + this.salary);
            }
        }
    
}

addSalary(company);

for (var i = 0; i < company.length; i++) {
    company[i].show();
}