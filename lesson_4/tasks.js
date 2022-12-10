'use strict'

{
    const rain = Math.round(Math.random());

    if (rain===1){
        console.log("Пошел дождь. Возьмите зонт!");
    } 
    if (rain===0){
        console.log("Дождя нет!");
    }
}

{
    const mathInput = +prompt('Введите кол-во баллов по математике:', +'');
    const rusLangInput = +prompt('Введите кол-во баллов по русскому языку:', +'');
    const informaticsInput = +prompt('Введите кол-во баллов по информатике:', +'');

    if ((mathInput + rusLangInput + informaticsInput) >= 265){
        console.log('Поздравляю, вы поступили на бюджет!');
        alert('Поздравляю, вы поступили на бюджет!');
    } else if ((mathInput + rusLangInput + informaticsInput) < 265){
        console.log('Увы, вы не поступили на бюджет!');
        alert('Увы, вы не поступили на бюджет!');
    } else {
        console.log('Указано неверное значение');
        alert('Указано неверное значение');
    }
}

{
    const summ = +prompt('Укажите какую сумму Вы хотите снять?', +'');

    if (summ >= 100 && summ % 100 === 0){
        console.log('Сумма одобрена');
        alert('Сумма одобрена');
    } else {
        console.log('Укажите сумму кратную 100');
        alert('Укажите сумму кратную 100');
    }
}