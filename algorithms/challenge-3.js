function increment(arr, value) {
 let newArray = arr.filter((item) => {
     return item.val += value
 })
 return newArray
}
console.log(increment([{ val: 10 }, { val: 20}, { val: 30 }], 5))
//module.exports = increment
