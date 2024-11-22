'use strict'

{       
  const hiddenNumber = Math.floor(Math.random() * 100) + 1;
  console.log(hiddenNumber);

  const getNumber = () => {       
      let inputNumber = prompt('Угадай число! От 1 до 100:', Number())
      if (inputNumber === null){ 
          return console.log('close');            
      }
      inputNumber = Number(inputNumber);        
      if (Number.isNaN(inputNumber)) {
          alert('Введи число!');
          getNumber();
      } else if (inputNumber < hiddenNumber) {
          alert('Больше!');
          getNumber();
      } else if (inputNumber > hiddenNumber) {
          alert('Меньше!');
          getNumber();
      } else if (inputNumber === hiddenNumber) {
          alert('Правильно!');            
      }                           
  }
  getNumber();
}
