'use strict'

import { listIPv4 } from './ipv4.js';

{
    const listIPv4Set = new Set(listIPv4);

    console.log(listIPv4Set.size);
}
    
