'use strict'

{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    const filter = (arr1, arr2) => {
        const newArr = [...arr1];
        for(let y = 0; y < arr2.length; y++){
            if (arr1.includes(arr2[y])){               
                const index = newArr.indexOf(arr2[y]);
                newArr.splice(index, 1)
            }             
        } return newArr
    }
    console.log(filter(allStudents, failedStudents));
}
