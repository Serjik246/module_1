'use strict'

const isPrime = number =>{
    const n = number;
    let i = 2;
    for (i, n; n >= i  ; ++i) {
    if (!(n % i)) break;
} return n === i
}
const resultTask2 = isPrime(+prompt('Введите число:', +''));
console.log(`resultTask2: ${resultTask2}`);
