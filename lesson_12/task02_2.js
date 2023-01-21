'use strict'

const cart = {
    items: [], 
    get totalPrice (){
        return this.calculateItemPrice ()
    },
    count: 0,
    add ( nameItems, priceItems, countItems = 1) {
        const addItem = this.items.push({i: nameItems, p: priceItems, c: countItems});
        this.count += countItems;
        return  addItem
    },
    increaseCount (incr) {
        return this.count += incr 
    },
    calculateItemPrice () {
        const itemPrice = [];
        for (let a = 0; a < this.items.length; a += 1) {
            itemPrice[a] = this.items[a].p * this.items[a].c;
        };
        let sumItemPrice = 0;
        for (let b = 0; b < itemPrice.length; b += 1) {
            sumItemPrice += itemPrice[b];
        }
        return  sumItemPrice - (sumItemPrice / 100 * this.discount)
    },
    print () {
        return `${JSON.stringify(this.items)}\n Total price: ${this.totalPrice}`;
        
    },
    set setDiscount (promocode) {
        if (promocode === 'METHED') {
            return this.discount = 15
        }
        else if (promocode === 'NEWYEAR') {
            return this.discount = 21
        } 
    },
    discount: 0,
};

console.log(cart);




