'use strict'

let number = Math.round(Math.random() * 100);
let guess = prompt('Игра отгадай число! Загадано число от 1 до 100, необходимо его отгадать. Введите число:', '')

while (true) {
    if (guess === null || guess === '' )
        break;
        console.log(guess);

    if (+guess === number) {
        guess = alert(`Правильно! Это число ${number}.`);
        break;       
    }

    if (guess > number) {
        guess = prompt('Меньше!', '');
        continue;
    }

    if (guess < number) {
        guess = prompt('Больше!', '');
        console.log(guess);
        continue;
        
    } 
    
    else guess = prompt('Введите число!', '')
}
