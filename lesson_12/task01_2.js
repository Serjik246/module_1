'use strict'

  const pow = (array, index = 0) => {
    let count = array.reduce((acc, num) => acc + num, 0);
    if (count > 50){
      return array;
    } else {
      array.push(Math.round(Math.random() * 10));
      return pow(array, index +1)
    };
  }
    
  const newArray = pow([+prompt('Введите число:', +'')]);
  console.log(newArray);