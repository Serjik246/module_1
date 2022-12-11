'use strict'

const reverseString = string =>{
    return [...string].reverse().join("")
}

const resultTask3 = reverseString(prompt('Введите текст:', 'текст'));
console.log(`resultTask3: ${resultTask3}`);
