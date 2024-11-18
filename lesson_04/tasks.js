'use strict'

{
    const rain = Math.round(Math.random())

    console.log(rain)
    
    switch(rain){
        case 1:
            console.log('Пошёл дождь. Возьмите зонт!');
            break;
        case 0:
            console.log('Дождя нет!');
            break;    
    };
};

{
    const mathExam = +prompt('Введите кол-во баллов по математике', Number());
    const rusLangExam = +prompt('Введите кол-во баллов по русскому языку', Number());
    const informExam = +prompt('Введите кол-во баллов по математике', Number());

    const sumPoints = mathExam + rusLangExam + informExam;

    if(sumPoints >= 265){
        alert('Поздравляю, вы поступили на бюджет!');
        console.log('Поздравляю, вы поступили на бюджет!')
    } else {
        alert('Не поздравляю, вы не поступили на бюджет!');
        console.log('Не поздравляю, вы не поступили на бюджет!')
    }
};

{
    const money = +prompt('Сколько денег хотите снять?', Number());
    if(money % 100 === 0 && money !== 0){        
        console.log('Поздравляю, вы можете снять деньги')
    } else {        
        console.log('Вы не можете снять деньги')
    }
}




