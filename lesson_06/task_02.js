'use strict'

{  
    const isPrime = (a) => {      
        for (let i = 2; i < a ; i++){
            if((a % i === 0)) {
                return false;
            } else {
                return true;
            }           
        }
        return a > 1;
    }
    console.log(isPrime(1));
};
