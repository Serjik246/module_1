'use strict'

{
    const money = +prompt('Введите сумму:', Number());

    if(money > 0 && money < 15000){        
        console.log(`Прогрессивный налог 13%: `, money * 0.13);
    } else if (money >= 15000 && money < 50000){        
        console.log(`Прогрессивный налог 20%: `, (15000 * 0.13) + ((money - 15000) * 0.2));
    } else if (money >= 50000){        
        console.log(`Прогрессивный налог 30%: `, (15000 * 0.13) + (35000 * 0.2) + ((money - 50000) * 0.3));
    } else {console.log('Ошибка')}
}