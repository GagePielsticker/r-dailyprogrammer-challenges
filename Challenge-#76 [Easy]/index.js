'use strict'

/* Setup our input string and exception array */
const string = 'the quick brown fox jumps over the lazy dog'
const exceptions = ['jumps', 'the', 'over']

let output = string
    .split(' ') // Split our string into an array
    .map((e, index) => {
        /* If our word is not an exception or the first word, make character 0 uppercase and append rest of word onto it */
        if(!exceptions.includes(e) || index == 0) return e.charAt(0).toUpperCase() + e.slice(1)
        return e
    })
    .join(' ')

console.log(output)

