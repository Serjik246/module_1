'use strict'

let number = Math.round(Math.random() * 100);

const guessNumber = () => {
    let guess = prompt('Введите число:', '')
    if (guess === null || guess === '' ){
        return
    }   
    if (+guess === number) {
        return alert(`Правильно! Это число ${number}.`);     
    }

    if (guess > number) {
        guess = alert('Меньше!');
        return guessNumber()
    }

    if (guess < number) {
        guess = alert('Больше!');
        return guessNumber()
    } 
    
    else guess = alert('Введите число!!!')
        return guessNumber()
}

console.log(guessNumber())