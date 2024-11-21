'use strict'

import { listIPv4 } from './ipv4.js';

{
    const getCountUniqueValues = (arr) => {
        const arrSet = new Set(arr);
        return arrSet.size;
    };
    console.log(getCountUniqueValues(listIPv4));
}
    
