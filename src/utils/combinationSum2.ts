const findCombinations = (candidates: number[], target: number): number[][] => {
	const result: number[][] = []
	candidates.sort((a, b) => a - b) // Sort the candidates array
	const bt = (start: number, target: number, path: number[]) => {
		if (target === 0) return result.push([...path])
		for (let i = start; i < candidates.length; i++) {
			if (i > start && candidates[i] === candidates[i - 1]) continue
			if (candidates[i] <= target) {
				path.push(candidates[i])
				bt(i + 1, target - candidates[i], path)
				path.pop()
			} else {
				break
			}
		}
	}

	bt(0, target, [])
	return result
}

const combinationSum2 = (candidates: number[], target: number) => {
	if (candidates.length < 1 || candidates.length > 100)
		throw new Error('The number of candidates should be between 1 and 100.')
	for (let i = 0; i < candidates.length; i++) {
		if (candidates[i] < 1 || candidates[i] > 50)
			throw new Error('A candidate number should be between 1 and 50.')
	}
	if (target < 1 || target > 30)
		throw new Error('The target number should be between 1 and 30.')
	return findCombinations(candidates, target)
}

export default combinationSum2
