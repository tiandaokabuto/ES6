/**
 * 获取对象数组A中指定类型的对象放到数组B中
 */
var products = [
  {
    name: 'cucumber',
    type: 'vegetable'
  }, {
    name: 'banana',
    type: 'fruit'
  }, {
    name: 'apple',
    type: 'fruit'
  }, {
    name: 'orange',
    type: 'fruit'
  }
];
// ES5
var products2 = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    products2.push(products[i])
  }
}
console.log(products2)
// ES6 filter
var products3 = products.filter(function (product){
  return product.type === "fruit"
})
console.log(products3)
/**
 * 按条件过滤对象数组A
 * 条件：蔬菜数量大于0，价格小于10
 */
var products4 = [
  {
    name: 'cucumber',
    type: 'vegetable',
    price: 3
  }, {
    name: 'banana',
    type: 'fruit',
    price: 5
  }, {
    name: 'apple',
    type: 'fruit',
    price: 10
  }, {
    name: 'orange',
    type: 'fruit',
    price: 11
  }
];
var products5 = products4.filter(function (product) {
  return product.type === "fruit" && product.price >= 10;
})
console.log(products5)