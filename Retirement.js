"use strict"

const co     = require('co')
const prompt = require('prompt-promise')

function* main() {
	let curAgeString = yield prompt("What is your current age? ")
	let retAgeString = yield prompt("What age would you like to retire? ")
	let curAge = parseInt(curAgeString , 10)
	let retAge = parseInt(retAgeString , 10)
	let workYearsLeft = retAge-curAge

	if (workYearsLeft <= 0) {
		console.log("\nYou can retire now congrats!!")
		process.exit()
	}
	console.log(`You have ${workYearsLeft} years left until you can retire.`)
	
	let date = new Date()
	let curYear = date.getFullYear()
	let retYear = curYear + workYearsLeft

	console.log(`It's ${curYear}, so you can retire in ${retYear}`)
	process.exit()
}

co(main())