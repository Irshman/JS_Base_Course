// 5.  Создать игру "Камень-Ножницы-Бумага".
// Выбор компьютера определяется строкой:  

// var computerChoice = Math.random();
// alert(computerChoice);

// let comp = getComputerChoice();
// let user = getUserChoice();
// function game(comp, user) {
    
// }

// Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


function getComputerChoice() {
    return Math.floor(Math.random() * (4 - 1) + 1);
}

function getUserChoice() {
    let choice = +prompt("Виберіть жест: 1 - Камень, 2 - Ножници, 3 - Бумага");
    let finallyChoice;

    switch (choice) {
        case 1:
            alert("Ваш вибор Камень");
            finallyChoice = 1;
            break;
        case 2:
            alert("Ваш вибор Ножници");
            finallyChoice = 2;
            break;
        case 3:
            alert("Ваш вибор Бумага");
            finallyChoice = 3;
            break;
    
        default:
            alert("Такого жеста нету в игре");
            break;
    }
    return finallyChoice;
}

let comp = getComputerChoice();
console.log(comp);

let user = getUserChoice();
console.log(user);

function game(comp, user) {
    if (comp === 1 ) {
        if (user === 2) {
            alert("Победил компютер, он вибра Камень");
        } else if (user === 3) {
            alert("Ви победили");
        } else {
            alert("Ничья!");
        }
    } else if (comp === 2 ) {
        if (user === 1) {
            alert("Ви победили");
        } else if (user === 3) {
            alert("Победил компютер, он вибра Ножници");
        } else {
            alert("Ничья!");
        } 
    } else {
        if (user === 1) {
            alert("Победил компютер, он вибра Бумагу");
        } else if (user === 2) {
            alert("Ви победили");
        } else {
            alert("Ничья!");
        } 
    }
}

game(comp, user);