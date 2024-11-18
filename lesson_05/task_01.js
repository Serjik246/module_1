'use strict'

{
    const fromDollarInRub = 64; // рублей
    const fromEuroInDollar = 1.2; // долларов
    
    const converterEuro = (PriceEuro) => {        
        return PriceEuro * fromEuroInDollar * fromDollarInRub
    }

    console.log(converterEuro(1))
}
