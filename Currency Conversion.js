"use strict"

const co     = require('co')
const prompt = require('prompt-promise')

function* main(){
	let amountEurosString = yield prompt("How many euros are you exchanging? ")
	let exchangeRateString = yield prompt("What is the exchange rate? ")

	let amountEuros = parseInt(amountEurosString , 10)
	let exchangeRate = parseInt(exchangeRateString , 10)
	let exchangeRateMod = exchangeRate/10

	let amountDollars = amountEuros * exchangeRate

	console.log(`${amountDollars}`)
	process.exit()
}




co(main())
