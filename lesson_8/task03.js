'use strict'

const generatorRandom3 = (b, m, n, j) =>{
    const array = [];
    for (let i = 0; i < b; i++) {
        if(j === 'even'){
            array.push(Math.round(Math.random() * (m - n)/2 + n/2)*2);
        }
        else if ( j === 'odd'){
            array.push(Math.round(Math.random() * (m - n)/2 + n/2 - 1/2)*2 + 1) ;
        }
        else array.push(Math.round(Math.random() * (m - n) + n));
    }
    return array
};

const newArray3 = generatorRandom3(+prompt('Введите число (количество значений в массиве):', +''), +prompt('Введите число (первое):', +''), +prompt('Введите число (второе):', +''), prompt('Введите строку:', '') );
console.log(newArray3)