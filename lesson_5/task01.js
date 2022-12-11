'use strict'

const converter = euro =>{
    if (Number.isNaN(parseFloat(euro))) {
        return `"${euro}" не число`
    }
    const dollarToEuro = 1.2;
    const rubleToDollar = 64;
    return euro * dollarToEuro * rubleToDollar
}

const resultTask1 = converter(prompt('Введите сумму в евро:', +''));
console.log(`resultTask1: ${resultTask1}`);
