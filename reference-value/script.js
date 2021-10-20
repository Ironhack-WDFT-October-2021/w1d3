// reference vs value

const numbers = [1, 2, 3, 4, 5]

function double(input) {
	// create a copy of arr
	const arr = input;
	for (let i = 0; i < arr.length; i++) {
		arr[i] = arr[i] * 2
	}
	return arr
}

const doubled = double(numbers) // -> [2, 4, 6, 8, 10]
// console.log({ doubled })
// console.log({ numbers })

const str = 'abc'
// make a copy
let copy = str
copy = 'xyz'
// change the copy
console.log({ str })
console.log({ copy })

const arr = [1, 2, 3]
// we could use slice to make a shallow copy
const arrCopy = arr.slice();
// or use the spread operator
// const arrCopy = [...arr] 
// alter the copy
arrCopy.push(4)
console.log({ arrCopy })
console.log({ arr })

const arr1 = ['x', 'y']
const arr2 = ['x', 'y']

// arr1.toString() === arr2.toString()

// JSON.stringify() changes an object to a string

// for comparison we turn objects to strings
JSON.stringify(arr1) === JSON.stringify(arr2)

// JSON.parse() changes a string to an object

// this is the way to create a copy 
// that is not shallow from an array or object
JSON.parse(JSON.stringify(arr1))
