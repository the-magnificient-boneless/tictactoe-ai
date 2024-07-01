const getPrimesFrom = (from: number): number | unknown[] => {
	return Array.from({ length: from }, (_, index) => {
		const pointer = from - index
		if (
			pointer === 2 ||
			pointer === 3 ||
			(pointer < 9 && pointer % 2 !== 0 && pointer % 3 !== 0) ||
			(pointer % 2 !== 0 &&
				pointer % 3 !== 0 &&
				pointer % 4 !== 0 &&
				pointer % 5 !== 0 &&
				pointer % 7 !== 0)
		) {
			return pointer
		}
	}).filter((num) => num !== undefined)
}
export default getPrimesFrom
