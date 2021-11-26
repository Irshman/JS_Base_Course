// 6. (*) Для задания 3 создать метод, позволяющий отсортировать массив
// сотрудников по одному из свойств: name, 
// sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

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

var criteria = prompt("Enter criteria name, sName, age, salary: ");
    company.sort(function(a, b) {
        switch (criteria) {
            case "name":
                if (a["name"] > b["name"]) {
                    return 1;
                }
                else if (a["name"] < b["name"]) {
                    return -1;
                } else {return 0;}
                break;
            case "sName":
                if (a["sName"] > b["sName"]) {
                    return 1;
                }
                else if (a["sName"] < b["sName"]) {
                    return -1;
                } else {return 0;}
                break;
            case "age":
                return a["age"] - b["age"];
                break;
            case "salary":
                return a["salary"] - b["salary"];
                break;
            default:
                alert("None");
        }
    })

    
for (var i = 0; i < company.length; i++) {
    company[i].show();
}