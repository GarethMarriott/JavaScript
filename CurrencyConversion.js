"use strict"

const co     = require('co')
const prompt = require('prompt-promise')

function* main(){
	let amountEurosString = yield prompt("How many euros are you exchanging? ")
	let exchangeRateString = yield prompt("What is the exchange rate? ")

	let amountEuros = parseFloat(amountEurosString , 10)
	let exchangeRate = parseFloat(exchangeRateString , 10)


	let amountDollars = Math.round(amountEuros * exchangeRate) /100

	console.log(`${amountDollars}`)
	process.exit()
}




co(main())
