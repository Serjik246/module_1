'use strict'

{   
    const generateRandom = (length) => {
        const arr = [];
        for (let i = 0; i < length; ++i){
            arr.push(Math.floor(Math.random() * 100) + 1);
        }    
        return arr
    };
    
    console.log(generateRandom(10))
}
