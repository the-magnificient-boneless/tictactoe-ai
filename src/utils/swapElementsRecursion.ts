function swapElementsRecursion(array: number[], index: number = 0): number[] {
	if (index >= array.length - 1) {
		return array
	}
	const swp = array[index]
	array[index] = array[index + 1]
	array[index + 1] = swp
	return swapElementsRecursion(array, index + 2)
}
export default swapElementsRecursion
