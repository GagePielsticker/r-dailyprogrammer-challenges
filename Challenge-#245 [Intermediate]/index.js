'use strict'

/**
 * Decrypts the GGG String Cipher
 * @param {String} encoded 
 * @param {String} key 
 */
const decode = (encoded, key) => {

    /* Setup a hashmap */
    const a = new Map()

    let splitKey = key.split(' ')

    /* For every 2 entries in our given dictionary, store the letter and the translation in the hashmap */
    for(let i = 0; i < splitKey.length; i++) {
        a.set(splitKey[i+1], splitKey[i]) // Translation: English Character
        i++
    }

    let splitString = encoded.split('') //Split our input letter by letter into an array

    /* Setup a testing string as well as output string */
    let test = ''
    let output = ''

    splitString.forEach(letter => { //For each letter in our string
        if(letter.toLowerCase() != 'g') return output += letter //If its not a g, append to output
        test += letter //Else add the g to our test string
        if(a.has(test)) { //If our test string exist in the hashmap as a key
            output += a.get(test) //Append the translation to our output, clear test string
            test = ''
        }
    })

    console.log(`OUTPUT DECODE: ${output}`)
}

/**
 * Generates random string of length <strength> using array <arr>
 * @param {Array<String>} arr  Array of possible entries
 * @param {Int} strength Length 
 * @returns 
 */
const randomEntrySelector = (arr, strength) => {
    let generatedCipher = ''

    /* generate our intial random cipher */
    for(let i = 0; i <= strength; i++){
        generatedCipher += arr[Math.floor(Math.random() * arr.length)]
    }

    return generatedCipher
}

/**
 * Encodes text into a GGG cipher
 * @param {String} str 
 * @param {Integer} strength 
 */
const encode = (str, strength) => {

    /* Setup our possible Letters to use in our encryption key as well as outputs */
    let possibilities = ['G', 'g']
    let translationArray = []
    let outputString = ''
    let outputKey = ''

    str
    .split('') //Split our input string and for each char
    .forEach(letter => {

        if(!letter.match(/[a-z]/i)) return outputString += letter // If the character is not a letter, return and append it to output
        if(translationArray.find(obj => obj.key == letter)) return outputString += translationArray.find(obj => obj.key == letter).cipher // If the letter has a cipher already, append it and return

        let generateCipher = randomEntrySelector(possibilities, strength) //Temp Cipher Store

        /* If our cipher exist in the array for another letter, generate a new one and check again */
        while(translationArray.find(obj => obj.cipher == generateCipher)) {
            generateCipher = randomEntrySelector(possibilities, strength)
        }

        //Once we are sure we have a letter thats not existant, and cipher thats unique, push to array as object
        translationArray.push({
            key: letter,
            cipher: generateCipher
        })

        outputKey += `${letter} ${generateCipher} `

        //Append to string our cipher text
        outputString += generateCipher
    })

    console.log(`ENCRYPTED TEXT: ${outputString}`)
    console.log(`ENCRYPTION KEY: ${outputKey}`)

    /* VALIDATE FUNCTION */
    // decode(outputString, outputKey)
}

/* Decryption Test Case */
const testCase1 = 'a GgG d GggGg e GggGG g GGGgg h GGGgG i GGGGg l GGGGG m ggg o GGg p Gggg r gG y ggG'
const testCase2 = 'GGGgGGGgGGggGGgGggG /gG/GggGgGgGGGGGgGGGGGggGGggggGGGgGGGgggGGgGggggggGggGGgG!'

decode(testCase2, testCase1)

/* Encryption Test Case */
const testCase3 = 'Her, Dee, Dur, Doo!'

encode(testCase3, 5)

