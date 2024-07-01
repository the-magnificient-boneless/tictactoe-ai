import removeNthFromHead from './utils/removeNthFromHead.js'
/* const args = {
	strings: ['Hello World', 'Text2'],
}

const encoded = StringToBase64(args) */

const list = [1, 2, 3, 4, 5]
const nth = 1

const removed = removeNthFromHead(list, nth)

console.log(removed)
