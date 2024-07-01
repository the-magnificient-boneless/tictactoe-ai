const removeAndSortElementsInArray = (array: number[]) =>
	array
		.filter((value, index) => array.indexOf(value) === index)
		.sort((a, b) => a - b)
export default removeAndSortElementsInArray
