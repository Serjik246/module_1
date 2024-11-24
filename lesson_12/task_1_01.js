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
      } else if (inputNumber < hiddenNumber) {
          alert('Больше!');
      } else if (inputNumber > hiddenNumber) {
          alert('Меньше!');
      } else if (inputNumber === hiddenNumber) {
          return alert('Правильно!');            
      } 
      getNumber();                          
  }
  getNumber();
}
