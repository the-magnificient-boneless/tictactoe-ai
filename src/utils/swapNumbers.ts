const swapNumbers = (list: number[]): number[] => {
	let res = [] as number[]
	for (let index = 0; index < list.length; index++) {
		switch (true) {
			case index === 1:
				list[index] > list[index - 1]
					? res.push(list[index], list[index - 1])
					: res.push(list[index - 1], list[index])
				break
			case list[index] > 1 && index % 2 === 0:
				list[index + 1] > list[index]
					? res.push(list[index + 1], list[index])
					: res.push(list[index], list[index + 1])
				break
			case list.length === 1:
				res = [res.push(list[index])]
				break
		}
	}
	return res
}

export default swapNumbers
