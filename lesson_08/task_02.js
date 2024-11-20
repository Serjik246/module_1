'use strict'

{   
    const generateRandom = (length, n, m) => {
        const arr = [];
        const max = Math.max(m,n);
        const min = Math.min(m,n);
        for (let i = 0; i < length; ++i){
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }    
        return arr
    };
    
    console.log(generateRandom(10, -10, 10))
}
