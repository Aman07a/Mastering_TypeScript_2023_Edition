// type Point = {
//   x: number;
//   y: number;
// };
var pt = { x: 12, y: 1234 };
var thomas = {
    first: 'Thomas',
    last: 'Hardy',
    nickname: 'Tom',
    id: 21837,
    sayHi: function () {
        return 'Hello!';
    },
};
thomas.first = 'kasjdh';
var shoes = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount: function (amount) {
        var newPrice = this.price * (1 - amount);
        this.price = newPrice;
        return this.price;
    },
};
console.log(shoes.applyDiscount(0.4));
