var tokens = require('../token.json') 
const fs = require('fs')

const tokensArray = tokens['tokens']

let tokenObj = {}
tokensArray.forEach(ele => {
    tokenObj[ele.address] = {
        chainId: ele.chainId, 
        symbol: ele.symbol, 
        name: ele.name, 
        logoURI: ele.logoURI
    }
})

fs.writeFile('tokenList.json', JSON.stringify(tokenObj), err => {
    if (err) throw err
})
