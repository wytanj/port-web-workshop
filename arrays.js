// An Array is a list like object
var fruits = ['Apple', 'Banana']
console.log(fruits.length)
// 2
// pop
fruits.pop(1)
// push
fruits.push('Mango')
// position of Banana
var pos = fruits.indexOf('Banana')
console.log(pos)
// this is how to remove an item
var removedItem = fruits.splice(pos, 1)
console.log(removedItem)
// Copy an Array
var shallowCopy = fruits.slice() // this is how to make a copy
console.log(shallowCopy)
// Length of Array
console.log(fruits.length)
