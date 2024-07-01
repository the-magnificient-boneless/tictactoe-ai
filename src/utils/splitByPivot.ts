const splitByPivot = (array: number[], pivot: number): [number[], number[]] => {
	return [
		array.filter((n) => {
			return n < pivot
		}),
		array.filter((n) => {
			return n >= pivot
		}),
	]
}

export default splitByPivot
