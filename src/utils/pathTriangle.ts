const pathTriangle = (triangle: number[][]): number =>
	triangle.reduce((acc, row) => acc + Math.min(...row), 0)

export default pathTriangle
