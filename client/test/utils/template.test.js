const assert = require('assert')
const templatize = require('../../src/utils/template')

const test = cb => cb(assert)

// '#templatize: works with sample input'
test(t => {
  const template = 'Hi there ${first_name} ${last_name}! Is ${phone_number} still the best number to reach you?'
  const person =  {
    id: 3,
    first_name: "Tadd",
    last_name: "Williams",
    phone_number: "5555555555",
    email: "tadd@example.com",
    street_address: "123 Main Street",
    city: "New York City",
    state: "New York",
    zip: "10001"
  }

  const actual = templatize(template, person)
  const expected = 'Hi there Tadd Williams! Is 5555555555 still the best number to reach you?'

  t.equal(actual, expected)
})

console.log('Tests pass')
