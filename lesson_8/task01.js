'use strict'

const generatorRandom = b =>{
    const array = [];
    for (let i = 0; i < b; i++) {
        array.push(Math.round(Math.random() * 100));
}
    return array};

const newArray = generatorRandom(+prompt('Введите число:', +''));
console.log(newArray)