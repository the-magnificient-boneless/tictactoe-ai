interface Log {
	url: string
	userId: string
}

const getMostVisitedURLsByUniqueIDVisitor = (logs: Log[]) => {
	const tempObj: { [url: string]: Set<string> } = {}
	for (const log of logs) {
		if (!tempObj[log.url]) {
			tempObj[log.url] = new Set()
		}
		tempObj[log.url].add(log.userId)
	}
	return Object.keys(tempObj).sort(
		(a, b) => tempObj[b].size - tempObj[a].size,
	)
}
export default getMostVisitedURLsByUniqueIDVisitor
