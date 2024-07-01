const characterFrequency = (word: string): [string, number][] => {
	const count = {} as { [key: string]: number }
	const ordered = [] as [string, number][]
	for (const letter of word) {
		count[letter] = (count[letter] || 0) + 1
	}
	for (const letter in count) {
		ordered.push([letter, count[letter]])
	}
	return ordered.sort((a, b) => a[0].localeCompare(b[0]))
}
export default characterFrequency
