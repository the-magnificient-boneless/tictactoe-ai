const maxAreaWaterContainer = (containerHeightLevels: number[]): number => {
	let containerLeft: number = 0,
		containerRight: number = containerHeightLevels.length - 1,
		maxAreaWater: number = 0

	if (containerHeightLevels.length === 1)
		return containerHeightLevels[0] as number

	while (containerLeft < containerRight) {
		maxAreaWater = Math.max(
			maxAreaWater,
			(containerRight - containerLeft) *
				Math.min(
					containerHeightLevels[containerLeft],
					containerHeightLevels[containerRight],
				),
		)
		containerHeightLevels[containerLeft] <
		containerHeightLevels[containerRight]
			? containerLeft++
			: containerRight--
	}
	return maxAreaWater
}
export default maxAreaWaterContainer
