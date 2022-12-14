'use strict'

const allСashboxII = [
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
    const newArr = [];

    for (let a = 0; a < arr.length; a += 1) {
        newArr[a] = arr[a][1] / arr[a][0]
    };
    let num = 0;
    for (let b = 0; b < newArr.length; b += 1) {
        num += newArr[b];
    };
    return Math.floor(num / arr.length)
};

const middleCost = getAveragePriceGoods(allСashboxII);
console.log(`Средняя цена товара: ${middleCost}`)