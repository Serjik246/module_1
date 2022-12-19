'use strict'

const getLeapYears = (n, m) => {
    let array = [];
    for ( n; n <= m; n++) {
        if (n % 4 == 0 && n % 100 != 0 || n % 400 == 0) {
            array.push(n);
        }
    }
    return array
} 

const newArray4 = getLeapYears(prompt('Введите год', -100),prompt('Введите еще год', 100));
console.log(newArray4)