'use strict'

{
    const summ = +prompt('Введите сумму:', +'');

    if (summ > 0 && summ <= 15000){
        console.log(`Налог: ${summ * 0.13}`)
    } else if (summ > 15000 && summ <= 50000){
        console.log(`Налог: ${15000 * 0.13 + ((summ - 15000) * 0.2)}`)
    } else if (summ > 50000){
        console.log(`Налог: ${(15000 * 0.13) + ((50000 - 15000) * 0.2) + ((summ - 50000) * 0.3)}`)
    } else {
        console.log(`Некорректное значение`)
    }    
}