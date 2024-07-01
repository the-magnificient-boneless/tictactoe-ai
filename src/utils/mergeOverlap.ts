const mergeOverlap = (intervals: number[][]) => {
	const mergedIntervals: number[][] = []
	let previousInterval: number[] | undefined

	intervals.forEach((currentInterval) => {
		const [currentStart, currentEnd] = currentInterval
		if (!previousInterval || currentStart > previousInterval[1]) {
			mergedIntervals.push(currentInterval)
			previousInterval = currentInterval
		} else {
			previousInterval[1] = Math.max(previousInterval[1], currentEnd)
		}
	})
	return mergedIntervals
}
export default mergeOverlap
