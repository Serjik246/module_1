'use strict'

{
    const item = prompt('Укажите название товара', String());
    const count = +prompt('Укажите количество товара', Number());
    const category = prompt('Укажите категорию товара', String());
    const price = +prompt('Укажите стоимость товара', Number());

    if (typeof count === 'number' && !Number.isNaN(count) 
        && typeof price === 'number' && !Number.isNaN(price) ){
      console.log(`На складе ${count} единицы товара ${item} на сумму ${price * count} деревянных`)
    } else {
      alert('Вы ввели некорректные данные');
      console.log('Вы ввели некорректные данные')
    }
}
