'use strict'

{
    const calcute = (totalSum, countItem, promoCode) =>{
        let result = totalSum;

        if(countItem > 10){
            result -= result * 0.03;
        };
        if(result > 30000){
            result -= (result - 30000) * 0.15;
        };
        if(promoCode === 'METHED'){
            result -= result * 0.1;
        } else if (promoCode === 'G3H2Z1' && result > 2000){
            result -= 500;
        };
        return result;
    };
    console.log(calcute(50000, 11, 'G3H2Z1'));
}