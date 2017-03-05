'use strict'

const co = require('co')
const prompt = require('prompt-promise')
const Anagram = require('./AnagramChecker.js');

function* main() {
	
	console.log("Enter two strings and I'll tell you if they are anagrams:")
	let first = yield prompt("enter the first string: ")
	let second = yield prompt("enter the second string: ")



	let result = Anagram.Checker("hello" , "elloh")
	let answer = ""
	if (result) {
		answer = "are"
	}
	else{
		answer = "are not"
	}
	console.log(`${first} and ${second} ${answer} anagrams`)
	process.exit()
}

co(main())
