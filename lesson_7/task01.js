'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const successfulStudents = allStudents.filter( i => {
    return failedStudents.indexOf(i) < 0;
});
console.log(`Студенты сдавшие экзамен: ${successfulStudents.join(', ')}`)