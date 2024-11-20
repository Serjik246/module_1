'use strict'

{   
    const generateRandom = (n, m) => {
        const arr = [];
        const max = Math.max(m,n);
        const min = Math.min(m,n);
        for (let i = min; i <= max; i++){
            if((i % 4 === 0 && i % 100 !== 0) || (i % 400 === 0)){
                arr.push(i)
            }           
        }    
        return arr
    };
    
    console.log(generateRandom(1990, 2024))
} 
