'use strict'

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];



const addPrefix = (arr, a) =>{
    const newArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        newArr[i] = ''.concat(a, ' ', arr[i])

    };
    return newArr
};

const mrName = addPrefix(names, 'Mr');
console.log(mrName)