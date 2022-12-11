'use strict'

const calculate = (summ, countItem, promoCode) =>{
    let discount1 = 0;
    let discount2 = 0;
    let discount3 = 0;

    if (countItem > 10) {
        discount1 = summ * 0.03;
    } 
    if (summ > 30000) {
        discount2 = (summ - 30000) * 0.15;
    }
    if (promoCode === "METHED") {
        discount3 = summ * 0.1
    } else if (promoCode === "G3H2Z1" &&  (summ - discount1 - discount2) > 2000) {
        discount3 = 500;
    } 
    return summ - discount1 - discount2 - discount3
}

const resultTask4 = calculate(+prompt('Сумма:', +''), +prompt('Количество:', +''), prompt('Промокод:', '') );
console.log(`resultTask4: ${resultTask4}`);

