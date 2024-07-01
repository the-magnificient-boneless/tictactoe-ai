const tripleSum = (numbers: number[]): number[][] => {
	numbers = [...new Set(numbers)].sort((a, b) => a - b)
	for (let i = 0; i < numbers.length - 2; i++) {
		let left = i + 1,
			right = numbers.length - 1
		while (left < right) {
			const currentSum = numbers[i] + numbers[left] + numbers[right]
			if (currentSum === 0)
				return [[numbers[i], numbers[left], numbers[right]]]
			currentSum < 0 ? left++ : right--
		}
	}
	return []
}
export default tripleSum
