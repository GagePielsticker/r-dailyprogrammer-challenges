'use strict'

/* User Input */
let input = '3d6'

/* Split it based on 'd' into an array */
let inputArr = input.split('d')
let output = 0

/* For each dice, roll random in range, output and add answer to final output */
for(let i = 0; i < inputArr[0]; i++) {
    let ans = Math.floor(Math.random() * inputArr[1] + 1)
    console.log(`Dice ${i + 1}: ${ans}`)
    output += ans
}

console.log(output)