const getNthUglyNumber = (n: number): number => {
	if (n <= 0) throw new Error('given number has to be a positive integer')
	const uglyNumbers: number[] = [1]
	let int2: number = 0,
		int3: number = 0,
		int5: number = 0,
		nxt2: number = 2,
		nxt3: number = 3,
		nxt5: number = 5
	while (uglyNumbers.length < n) {
		const min = Math.min(nxt2, nxt3, nxt5)
		uglyNumbers.push(min)
		if (min === nxt2) {
			int2++
			nxt2 = uglyNumbers[int2] * 2
		}
		if (min === nxt3) {
			int3++
			nxt3 = uglyNumbers[int3] * 3
		}
		if (min === nxt5) {
			int5++
			nxt5 = uglyNumbers[int5] * 5
		}
	}
	return uglyNumbers[n - 1]
}

export default getNthUglyNumber
