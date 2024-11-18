'use strict'

{
    const calcute = (totalSum, countItem, promoCode) =>{
        let discountTenCount = 0;
        let discountMoreThreethousand = 0;
        let discountPromoCode = 0;

        if(countItem > 10){
            discountTenCount = totalSum * 0.03;
        };
        if(totalSum > 30000){
            discountMoreThreethousand = (totalSum - 30000) * 0.15;
        };
        if(promoCode === 'METHED'){
            discountPromoCode = totalSum * 0.1;
        } else if (promoCode === 'G3H2Z1' 
                    && totalSum - discountTenCount - discountMoreThreethousand > 2000){
                        discountPromoCode = 500;
        };
        return totalSum - discountTenCount - discountMoreThreethousand - discountPromoCode;
    };
    console.log(calcute(2300, 11, 'G3H2Z1'));
}