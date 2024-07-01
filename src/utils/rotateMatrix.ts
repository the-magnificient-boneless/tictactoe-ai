const rotateMatrix = (matrix: number[][]): number[][] => {
	const n = matrix.length
	if (
		matrix.every(
			(row) => row.length === matrix[0].length && row.length === n,
		)
	) {
		for (let i = 0; i < n; i++) {
			for (let j = i + 1; j < n; j++) {
				;[matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
			}
			matrix[i].reverse()
		}
		return matrix
	}
	throw new Error(
		'Matrix must contain equal number of elements per row as per column',
	)
}

export default rotateMatrix
