const gameJumpsII = (nums: number[]) => {
	/*TODO: Possible refactor to improve performance to archive Constraints:

    1 <= nums.length <= 104
    0 <= nums[i] <= 1000
    It's guaranteed that you can reach nums[n - 1].
    */
	const n = nums.length
	if (n === 1) return 0
	let jump = 1
	let currentMaxIndex = nums[0]
	let nextMaxIndex = nums[0]
	for (let index = 1; index < n; index++) {
		if (index > currentMaxIndex) {
			jump += 1
			currentMaxIndex = nextMaxIndex
		}
		nextMaxIndex = Math.max(nextMaxIndex, index + nums[index])
	}
	return jump
}
export default gameJumpsII
