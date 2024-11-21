'use strict';

{
  const cart = {
    items: [],
    get totalPrice() {
      return this.calculateItemPrice();
    },
    count: 0,
    getTotalPrice() {
      return this.totalPrice;
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
      return this.items.reduce((acc, item) => acc += item.price * item.cnt, 0);
    },
    clear() {
      this.items.splice(0, this.items.length);
      this.totalPrice = 0;
      this.count = 0;
    },
    print() {
      console.log(JSON.stringify(this.items));
      console.log(this.totalPrice);
    },
  };
  cart.add('eggs', 100, 2);
  cart.add('milk', 80, 3);
  cart.add('meat', 400);
  console.log(cart);


  cart.print();
}
