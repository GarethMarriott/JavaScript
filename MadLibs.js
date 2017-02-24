"use strict"





"use strict"

const co     = require('co')
const prompt = require('prompt-promise')

function* main() {
  let noun      = yield prompt("enter a noun > ")
  let verb      = yield prompt("enter a verb > ")
  let adjective = yield prompt("enter an adjective > ")
  let adverb    = yield prompt("enter an adverb > ")

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`)
  process.exit()
}

co(main())