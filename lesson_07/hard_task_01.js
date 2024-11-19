'use strict'

{
    const allСashbox = [
        [12, 4500], 
        [7, 3210], 
        [4, 650], 
        [3, 1250], 
        [9, 7830], 
        [1, 990], 
        [6, 13900], 
        [1, 370]
      ];
    const getAveragePriceGoods = (arr) =>{
        let sum = 0;
        for (const elem of arr){
                sum += elem[1] / elem[0];
        } return Math.round(sum / arr.length); 

    };
    console.log(getAveragePriceGoods(allСashbox))
}