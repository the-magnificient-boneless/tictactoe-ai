type List<T> = T[]

const removeNthFromHead = <T>(list: List<T>, nth: number) => {
	const listed: List<T> = [...list]
	const length = listed.length
	const indexToRemove = length - nth
	if (Array.isArray(listed) && indexToRemove >= 0 && indexToRemove < length) {
		listed.splice(indexToRemove, 1)
	}
	return listed
}

export default removeNthFromHead
