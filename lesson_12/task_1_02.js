'use strict'

{   
  const arr = [];
  const generateArray = (arr) => {
      arr.push(Math.round(Math.random() * 10));
      if(arr.length < 50){
          generateArray(arr);                                  
      } 
      return arr;        
  }
  console.log(generateArray(arr));
}
