'use strict'

{  
    const modifyString = (words) => {        
        return words[0].toUpperCase() + words.slice(1).toLowerCase()
    }

    console.log(modifyString('привет Мир'))
}