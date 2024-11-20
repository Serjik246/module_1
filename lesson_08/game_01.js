'use strict'

{   
    const hiddenNumber = Math.floor(Math.random() * 100) + 1;
    let inputNumber;
    console.log(hiddenNumber);
    
    while(inputNumber = prompt('Угадай число! От 1 до 100:', Number())){
        inputNumber = Number(inputNumber);
        if(Number.isNaN(inputNumber)){
            alert('Введи число!');
        } else if (inputNumber < hiddenNumber){
            alert('Больше!');
        } else if (inputNumber > hiddenNumber){
            alert('Меньше!');
        } else if (inputNumber === hiddenNumber){
            alert('Правильно!');
            break
        }                    
    }
}
