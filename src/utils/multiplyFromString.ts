const stringSingleNumberConverter = (n: string): number => {
	switch (n) {
		case '0':
			return 0
		case '1':
			return 1
		case '2':
			return 2
		case '3':
			return 3
		case '4':
			return 4
		case '5':
			return 5
		case '6':
			return 6
		case '7':
			return 7
		case '8':
			return 8
		case '9':
			return 9
		default:
			throw new Error('Only numbers are allowed')
	}
}
const convertFromString = (n: string): number => {
	n.split('')
	const number = []
	if (n.length > 1 && n[0] === '0')
		throw new Error('0 cannot be leading a string that represents a number')
	if (n.length > 0 && n.length <= 200) {
		for (let index = 0; index < n.length; index++) {
			number.push(stringSingleNumberConverter(n[index]))
		}
		//return Number(number.join(''))
		return +number.join('')
	} else {
		throw new Error(
			'Input string length must be greater than 0 and less or equal to 200',
		)
	}
}
const multiplyFromString = (n1: string, n2: string) =>
	convertFromString(n1) * convertFromString(n2)
export default multiplyFromString
