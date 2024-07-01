const minimunSizeSubarraySum = (numbers: number[], s: number): number[] => {
	let minLength = Infinity,
		sum = 0,
		start = 0,
		end = 0,
		result: number[] = []
	while (end < numbers.length) {
		while (sum < s && end < numbers.length) {
			sum += numbers[end]
			end++
		}
		while (sum >= s) {
			if (end - start < minLength) {
				minLength = end - start
				result = numbers.slice(start, end)
			}
			sum -= numbers[start]
			start++
		}
	}
	return minLength === Infinity ? [0] : result
}

export default minimunSizeSubarraySum
