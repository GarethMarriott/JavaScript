'use strict'

let request = require('request-promise')
let co = require('co')
let prompt = require('prompt-promise')

function* getWeather(city , country) {
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=17eb9ea880e5328393fe67a891feffee&units=metric`
	//console.log(url)
	let body = yield request(url)
	return JSON.parse(body)
	//console.log(JSON.parse(body))
}

function* main() {
	let place = yield prompt("Where are you?\nExample: Chicago US\n")
	let placeSplit = place.split(" ")
	let current = yield getWeather(placeSplit[0] , placeSplit[1])
	console.log(`${placeSplit[0]} weather:\n${current.main.temp} degrees Celsius`)
	process.exit()
}

co(main())