const countingValleys = (path: string) => {
	let valley_walked_through = 0
	let steps_walked_through = 0
	const s = []
	for (let index = 0; index < path.length; index++) {
		if (path[index].toUpperCase() === 'U') {
			steps_walked_through += 1
		} else {
			steps_walked_through -= 1
		}
		s.push(steps_walked_through)
		if (steps_walked_through < 0 && s[index - 1] === 0) {
			valley_walked_through += 1
		}
	}
	return valley_walked_through
}

export default countingValleys
