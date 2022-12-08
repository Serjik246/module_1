'use strict'
/*{
    const nameProduct = 'Cow';
    const countProduct = 33;
    const categorytProduct = 'Farming';
    const priceProduct = 110000;
    console.log('nameProduct: ', nameProduct);
    console.log('countProduct: ', countProduct);
    console.log('categorytProduct: ', categorytProduct);
    console.log('priceProduct: ', priceProduct);
    console.log('summProduct: ', countProduct * priceProduct)
}
{
    const nameProduct = 'Orange';
    const countProduct = 101;
    const categorytProduct = 'Fruit';
    const priceProduct = 12;
    console.log(`nameProduct: ${nameProduct}`);
    console.log(`countProduct: ${countProduct}`);
    console.log(`categorytProduct: ${categorytProduct}`);
    console.log(`priceProduct: ${priceProduct}`);
    console.log(`summProduct: ${countProduct * priceProduct}`)
}*/
{
    const nameProduct = prompt('Наименование товара:', '');
    console.log(`type: ${typeof nameProduct}`);
    console.log(`nameProduct: ${nameProduct}`);
    
    const countProduct = +prompt('Количество товара:', +'');
    console.log(`type: ${typeof countProduct}`);
    console.log(`countProduct: ${countProduct}`);
    
    const categorytProduct = prompt('Категория товара:', '');
    console.log(`type: ${typeof categorytProduct}`);
    console.log(`categorytProduct: ${categorytProduct}`);
    
    const priceProduct = +prompt('Цена товара', +'');
    console.log(`type: ${typeof priceProduct}`);
    console.log(`priceProduct: ${priceProduct}`);
    
    alert(`На складе ${countProduct} единиц(ы) товара "${nameProduct}" категории "${categorytProduct}" на сумму ${countProduct * priceProduct}`)
    console.log(`На складе ${countProduct} единиц(ы) товара "${nameProduct}" категории "${categorytProduct}" на сумму ${countProduct * priceProduct}`)
}