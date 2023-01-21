'use strict'

const rectangle  = {
    width: 5,
    height: 5,
    get getPerimeter () {
        return this.perimeter = `${(this.width + this.height) * 2}cm`
    },
    get getArea () {
        return this.area = `${this.width * this.height}cm` 
    },

    set setWidth(val) {
        if (typeof val === 'number') {
            return this.width = val
        }
    },
    set setHeight(val) {
        if (typeof val === 'number') {
            return this.height = val
        }
    },
};

console.log(rectangle);

console.log(rectangle.getPerimeter);

console.log(rectangle.getArea);


