function missingNumber(numArr) {
let count = numArr.slice(-1);
let missing = []

for (let i = 1; i <= count; i++) {
if (numArr.indexOf(i) === -1) {
  missing. push(i)
}
}
return missing
}
console.log(missingNumber([1,2,3,4,5,7,8,9]))
//module.exports = missingNumber
