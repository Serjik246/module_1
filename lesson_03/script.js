'use strict'

{
    const item = prompt('Укажите название товара', String());
    const count = +prompt('Укажите количество товара', Number());
    const category = prompt('Укажите категорию товара', String());
    const price = +prompt('Укажите стоимость товара', Number());
  
    console.log(`item:`, typeof item);
    console.log(`count:`, typeof count);
    console.log(`category:`, typeof category);
    console.log(`price:`, typeof price);
    console.log(`На складе ${count} единицы товара ${item} на сумму ${price * count} деревянных`);
  }
  