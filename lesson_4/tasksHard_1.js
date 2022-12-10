'use strict'

{
    const summ = +prompt('Введите сумму:', +'');

    if (summ > 0 && summ <= 15000){
        console.log(`Налог: ${summ * 0.13}`)
    } else if (summ > 15000 && summ <= 50000){
        console.log(`Налог: ${summ * 0.2}`)
    } else if (summ > 50000){
        console.log(`Налог: ${summ * 0.3}`)
    } else {
        console.log(`Некорректное значение`)
    }    
}