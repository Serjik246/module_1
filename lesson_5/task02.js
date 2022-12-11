'use strict'

const modifyString = words =>{
    const firstLetter = words[0].toUpperCase();
    const otherLetter = words.substring(1).toLowerCase();
    return firstLetter + otherLetter
}

const resultTask2 = modifyString(prompt('Введите что-нибудь:', 'текст'));
console.log(`resultTask2: ${resultTask2}`);
