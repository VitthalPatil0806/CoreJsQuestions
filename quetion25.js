const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
console.log(shoppingCart);
// adding element at beginning of array
shoppingCart.unshift('Meat');
console.log(shoppingCart);
// adding element at end of array
shoppingCart.push('sugar');
console.log(shoppingCart)
// removing element from array
var element = shoppingCart.splice(4,1);
console.log(shoppingCart);
// modifying array element 
shoppingCart[2] = 'Green Tea';
console.log(shoppingCart);