'use strict'

const generatorRandom2 = (b, m, n) =>{
    const array = [];
    for (let i = 0; i < b; i++) {
        array.push(Math.round(Math.random() * (m - n) + n));
    }
    return array
};

const newArray2 = generatorRandom2(+prompt('Введите число (количество значений в массиве):', +''), +prompt('Введите число (первое):', +''), +prompt('Введите число (второе):', +'') );
console.log(newArray2)