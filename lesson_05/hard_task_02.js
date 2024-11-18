'use strict'

{
    const firstNumber = +prompt('Введите первое число:', Number());
    const secondNumber = +prompt('Введите второе число:', Number());

    const minValue = (a, b) => {
        return (a + b - Math.abs(a - b))/2
    };

    console.log(minValue(firstNumber, secondNumber))
}