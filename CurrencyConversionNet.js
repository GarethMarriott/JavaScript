"use strict"

const co     = require('co')
const prompt = require('prompt-promise')
const request = require('request-promise')

function* main(){

	let currencyRaw = yield request('http://api.ozlo.co/api/currency/all')
	let currencylist = JSON.parse(currencyRaw).currencies
	let chosen = true
	
	console.log(currencylist)
	let currency = yield prompt(`Pick an exchange rate listed:`)

	let quoteRaw = yield request(`http://api.ozlo.co/api/currency/quote?c=${currency}`)
	let quote = JSON.parse(quoteRaw).quote
	let inputValue = currency.split("-")


	let startAmount = yield prompt(`How much ${inputValue[0]} do you want to exchange`)
	let finalAmount = Math.round(startAmount * quote) /100
	console.log(finalAmount)
	process.exit()
}




co(main())
