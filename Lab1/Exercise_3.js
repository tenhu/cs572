const item = {
     "name": "Avocado",
     "type": "Fruit",
     "category": "Food",
     "price": 200
}

const applyCoupon = object =>
     percent => {
          object["price"] = object["price"] - (object["price"] * percent) / 100
          return object;
     }
     ;

console.log(applyCoupon(item)(10).price === 180);