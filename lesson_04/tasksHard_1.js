'use strict'

{
    const money = +prompt('Введите сумму:', Number());

    if(money > 0 && money < 15000){        
        console.log(`Налог 13%: `, money * 0.13);
    } else if (money >= 15000 && money < 50000){        
        console.log(`Налог 20%: `, money * 0.2);
    } else if (money >= 50000){        
        console.log(`Налог 30%: `, money * 0.3);
    } else {console.log('Ошибка')}
}