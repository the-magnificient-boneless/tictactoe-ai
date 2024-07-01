const generateParenthesis = (n: number): string[] => {
	const res = [] as string[]
	;(function generate(str = '', l = 0, r = 0) {
		if (str.length === 2 * n) return res.push(str)
		if (l < n) generate(str + '(', l + 1, r)
		if (r < l) generate(str + ')', l, r + 1)
	})()
	return res
}
export default generateParenthesis
