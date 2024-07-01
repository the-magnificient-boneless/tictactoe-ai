const winnerCombinations = [
	[
		[0, 0],
		[0, 1],
		[0, 2],
	],
	[
		[1, 0],
		[1, 1],
		[1, 2],
	],
	[
		[2, 0],
		[2, 1],
		[2, 2],
	],
	[
		[0, 0],
		[1, 0],
		[2, 0],
	],
	[
		[0, 1],
		[1, 1],
		[2, 1],
	],
	[
		[0, 2],
		[1, 2],
		[2, 2],
	],
	[
		[0, 0],
		[1, 1],
		[2, 2],
	],
	[
		[0, 2],
		[1, 1],
		[2, 0],
	],
]

const isPlayerWinner = (
	moves: number[][],
	player: string,
	playyerWinner: string | null = null,
) => {
	const nonRepeatedMoves = [
		...new Set(moves.map((row) => JSON.stringify(row))),
	].map((str) => JSON.parse(str)) //Non repeated moves
	if (nonRepeatedMoves.length >= 3) {
		winnerCombinations.forEach((combinations) => {
			let counter = 0
			combinations.forEach((combination) =>
				nonRepeatedMoves.forEach((move) => {
					if (
						combination[0] === move[0] &&
						combination[1] === move[1]
					) {
						counter++
						if (counter === 3) playyerWinner = player
					}
				}),
			)
		})
		return playyerWinner
	}
}
const ticTacToe = (moves: number[][]) => {
	if (moves.length > 9)
		throw new Error('Something went wrong, there must be up to 9 moves')
	let turn = 1,
		win
	const playerAmoves = [],
		playerBmoves = [],
		draw = moves.length === 9 ? 'draw' : false
	while (turn <= moves.length) {
		if (turn % 2 !== 0) {
			playerAmoves.push(moves[turn - 1])
			win = isPlayerWinner(playerAmoves, 'A')
		} else {
			playerBmoves.push(moves[turn - 1])
			win = isPlayerWinner(playerBmoves, 'B')
		}
		turn++
	}
	return win ?? draw
}
export default ticTacToe
