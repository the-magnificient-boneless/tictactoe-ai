const addAll = (
	array: number[],
	index: number = 0,
	count: number = 0,
): number => {
	if (index >= array.length) return count
	return addAll(array, index + 1, (count += array[index]))
}
export default addAll
