'use strict'

{  
    const isPrime = (a) => {      
        for (let i = 2; i < a ; i++){

            if(a % i !== 0) {
                continue;
            } else {
                return false;
            }            
        }
         return true;
    }

    console.log(isPrime(1987));
}