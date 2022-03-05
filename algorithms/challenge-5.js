function arraySum(arr1, arr2) {
let newArray =[]

for(let i=0; i<arr1.length; i++){
for(let j=0; j<arr1[i].length; j++){

  newArray.push( arr1[i] +=arr2[j])
}
}
return newArray

}
console.log(arraySum([1,2,4,5,6,2,1], [2,3,5]));

//module.exports = arraySum

