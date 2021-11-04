// This doesn't work, but here is my attempt:

function firstEncryption(string) {
    let splitString = string.split('')
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let splitAlpha = alpha.split('')
    let newString = ''
    for (i = 0; i < splitString.length; i++) {
        for (j = 0; j < splitAlpha.length - 5; j++) {
            if (splitAlpha.includes(splitString[i])) {
                newString += splitAlpha[j + 5]
            } else {newString += splitString[i]}
        }
    }
    return newString
}


console.log(firstEncryption('I love cryptography!')) //N qtvj hwyuytlwfumy