const changeEnough = (change: number[], ammount: number) => {
	return (
		[
			change[0] * 0.25,
			change[1] * 0.1,
			change[2] * 0.05,
			change[3] * 0.01,
		].reduce((acc, v) => acc + v) >= ammount
	)
}
console.log(changeEnough([30, 40, 20, 5], 12.55))
console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5], 0.75))
console.log(changeEnough([10, 0, 0, 50], 3.85))
console.log(changeEnough([1, 0, 5, 219], 19.99))
export default changeEnough
