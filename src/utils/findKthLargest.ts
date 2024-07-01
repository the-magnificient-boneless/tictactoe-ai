const findKthLargest = (array: number[], k: number) => {
	let i = 0
	const ordered = [] as number[]
	const l = array.length
	while (i < l) {
		const min = Math.min(...array)
		ordered.push(min)
		array.splice(array.indexOf(min), 1)
		i += 1
	}
	return ordered.splice(array.length - k, 1).shift()
}

export default findKthLargest
