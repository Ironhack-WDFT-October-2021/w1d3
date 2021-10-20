// unordered collection of any (keyed) values
const emptyObj = {}

// property: value, key: value

const cat = {
	name: 'Fizoutsi',
	height: 20,
	hobbies: ['running', 'eating'],
	address: {
		street: 'Friedrichstr.',
		city: 'Berlin'
	},
	// someKey: 'here i am'
}
// accessing the values
// <name of the object>.<key> -> dot notation
// console.log(cat.name)
// accessing a nested property
// here an array
console.log(cat.hobbies[0])
// or an object
console.log(cat.address.city)

// we want to use 'someKey' to access that value -> bracket notation
const someKey = 'height'
console.log(cat[someKey])

// deleting a property in an object
delete cat.height
console.log(cat)

// checking if a property exists

console.log(cat.someKey)
// check if name property exists in the cat object
if ('name' in cat) {
	console.log('it exists')
} else {
	console.log('it does not exist')
}

// changing the value of a property
cat.height = 30

// add a property
cat.weight = 8
// console.log(cat)

console.clear()

// iterating over an object
const person = {
	name: 'Alice',
	age: 33,
}

// for in loop gives us the keys
// for (let key in person) {
// 	console.log(key)
// 	console.log(person[key])
// }

// get all the values of an object -> Object.values(<name of the object>)

console.log(Object.values(person))
// get all the keys of an object -> Object.keys(<name of the object>)

console.log(Object.keys(person))
// Object.keys(person).forEach(function (key) {
// 	console.log(key)
// })


// console.log(Object.entries(person)) // ->  [ [ 'name', 'Alice' ], [ 'age', 33 ] ]

const persons = [
	{
		name: 'alice',
		age: 23,
		'last address': 'Munich'
	},
	{
		name: 'bob',
		age: 32,
		// if the key should contain a space 
		// it has to be a string
		'last address': 'Berlin'
	}
]

// iterate over persons and log every name
for (let person of persons) {
	// console.log(person)
	console.log(person.name)
	// if the key contains a space we have to use 
	// the brackets as well
	console.log(person['last address'])
}