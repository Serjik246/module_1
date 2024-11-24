'use strict'

{   
  const arr = [];
  const generateArray = (arr) => {
      arr.push(Math.round(Math.random() * 10));
      let sum = arr.reduce((acc, item) => {
        return acc + item}
        , 0);
      console.log(sum);  
      if(sum < 50){
          generateArray(arr);                                  
      } 
      return arr;        
  }
  console.log(generateArray(arr));
}
