function numSwap(number) {
        return (
          parseFloat(
            number
              .toString()
              .split('')
              .reverse()
              .join('')
          ) * Math.sign(number)
        )                 
      }

console.log(numSwap(1234))
//module.exports = numSwap
