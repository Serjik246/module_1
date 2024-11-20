'use strict'

{   
    const generateRandom = (length, n, m, str) => {
        const arr = [];
        const max = Math.max(m, n);
        const min = Math.min(m, n);    
        for (let i = 0; i < length; ++i) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;    
            if (str === 'even' && randomNumber % 2 !== 0){
                i--;
                continue;
            }
            if (str === 'odd' && randomNumber % 2 === 0){
                i--;
                continue;
            }    
            arr.push(randomNumber);
        }
        return arr;
    };
    
    console.log(generateRandom(10, 0, 10, 'odd'));
    
}
