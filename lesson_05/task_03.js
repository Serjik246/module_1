'use strict'

{  
    const reverseString = (words) => {        
        return words.split('').reverse().join('')
    }

    console.log(reverseString('Привет мир'));
}