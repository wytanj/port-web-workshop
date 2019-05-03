// let x = 1
// let y = 'hello'
// var dt = new Date()
// const a = {}
// console.log('a', a)
// a.name = 'armenia'
// console.log('is it armenia', a)
// let z = {
//   name: 'Captain America',
//   year_born: 1918,
//   age: dt.getFullYear() - 1918
// }
// console.log(x, y, z)
function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}

discountPrices([50, 20, 60], 0.2)
// var vs let
// var: function scoped
// let: block scoped
