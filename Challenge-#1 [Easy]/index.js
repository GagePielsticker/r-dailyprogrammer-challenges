'use strict'

/* Dependencies & Setup our user input interface */
const fs = require('fs')

const inputInterface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


/* 
    We must make the prompts execute asynchronously,
    to do this we are making them promise based,
    and executing them in an async method instead of stacking callbacks.
    This avoids unecessary nesting and keeps our work clean.
*/
const promptName = () => {
    return new Promise((resolve, reject) => {
        inputInterface.question('What is your name?\n', name => {
            resolve(name)
        })
    })
}

const promptAge = () => {
    return new Promise((resolve, reject) => {
        inputInterface.question('What is your age?\n', age => {
            resolve(age)
        })
    })
}

const promptUsername = () => {
    return new Promise((resolve, reject) => {
        inputInterface.question('What is your username?\n', username => {
            resolve(username)
        })
    })
}


//Make execution async and call our functions
const main = async () => {

    //Call our methods
    let name = await promptName()
    let age = await promptAge()
    let username = await promptUsername()

    inputInterface.close() //Close our interface

    let output = `Your name is ${name}, you are ${age} years old, and your username is ${username}.`
    console.log(output)

    /* Extra Credit, this will just simply overwrite the file, not append. */
    fs.writeFile('./log.txt', output + '\n', err => {
        if(err) return console.log(`Error writing to file: ${err}`)
    })
}

main()