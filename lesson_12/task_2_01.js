'use strict'

{   
  const rectangle = {
      set height (h) {
          if (typeof h !== 'number' || Number.isNaN(h)) {
              this._height = 5;                                
          } else this._height = h;
      },
      set width (w) {
          if (typeof w !== 'number' || Number.isNaN(w)) {
              this._width = 5; 
          } else this._width = w;
      },
      get perimeter () {
          return `${2 * (this._height + this._width)} см`;
      },
      get area () {
          return `${this._height * this._width} см`;
      },
  };

  console.log(rectangle.height = 10);
  console.log(rectangle.width = 10);
  console.log(rectangle.perimeter);
  console.log(rectangle.area);
}
