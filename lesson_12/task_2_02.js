'use strict';

{
  const cart = {
    items: [],    
    count: 0,
    discount: 0,
    get totalPrice() {
        return this.calculateItemPrice();
      },
    set setDiscount (promocode) {
      if(promocode === 'METHED') {
          this.discount = 15;
      };
      if(promocode === 'NEWYEAR') {
          this.discount = 21;
      };        
    },  
    add(item, price, cnt = 1) {
      this.items.push({
        item,
        price,
        cnt,
      });
      this.increaseCount(cnt);
      this.calculateItemPrice();
    },
    increaseCount(n) {
      this.count += n;
    },
    calculateItemPrice() {
      return this.items.reduce((acc, item) => acc += item.price * item.cnt, 0) * (1 - 0.01 * this.discount);
    },
    clear() {
      this.items.splice(0, this.items.length);
      this.count = 0;
      this.discount = 0;
    },
    print() {
      console.log(JSON.stringify(this.items));
      console.log(this.totalPrice);
    },
    
    
  };
  cart.add('eggs', 100, 2);
  cart.add('milk', 80, 3);
  cart.add('meat', 400);

  cart.setDiscount = 'NEWYEAR';

  console.log(cart.totalPrice);
  console.log(cart.discount);
  console.log(cart.totalPrice);
}
