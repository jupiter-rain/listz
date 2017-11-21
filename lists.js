const assert = require("assert")


function sum(input) {
  let n = 0
  for(let i = 0; i < input.length; i++) {
    n = n + input[i]
  }
  return n
}

assert.equal(sum([1,2,3]), 6)

assert.equal(sum([]), 0)

assert.equal(sum([5,39,29]), 73)


function max(input) {
  let biggestNumber = undefined
  for(let i = 0; i < input.length; i++) {
    if(biggestNumber > input[i]) {
      continue
    } else {
      biggestNumber = input[i]
    }
  }
  return biggestNumber
}

assert.equal(max([7,9,11]), 11)

assert.equal(max([723,-92, -1992]), 723)
