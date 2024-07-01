import React, { useEffect, useState, useRef, RefObject } from 'react'
import Modal from './ModalBox'
import GameConfig from './GameConfig'
import EndingScreen from './EndingScreen'
import './ticTacToe.css'
import './Box/box.css'

const PLAYER = {
	HUMAN: '',
	AI: '',
}

type Player = '❌' | '⭕️' | null | string // Simplified Player type

interface MinimaxResult {
	score?: number
	index?: number
}

export default function TicTacToe() {
	const [symbol, setSymbol] = useState<Player>()
	const [board, setBoard] = useState<Player[]>(Array(9).fill(null))
	const [currentPlayer, setCurrentPlayer] = useState<Player>(PLAYER.HUMAN)
	const [moveCount, setMoveCount] = useState<number>(0)
	const [winner, setWinner] = useState<Player | 'Draw!' | null>(null)
	const [winnerDeclared, setWinnerDeclared] = useState<boolean>(false)
	const [showModal, setShowModal] = useState<boolean>(false)
	const [totalRoundsToPlay, setTotalRoundsToPlay] = useState<number>(0)
	const [roundsPlayed, setGamesPlayed] = useState<number>(0)
	const [scoreA, setScoreA] = useState<number>(
		roundsPlayed === 0 ? Number(localStorage.getItem('scoreA')) : 0,
	)
	const [scoreB, setScoreB] = useState<number>(
		roundsPlayed === 0 ? Number(localStorage.getItem('scoreB')) : 0,
	)
	const [draws, setDraws] = useState<number>(
		roundsPlayed === 0 ? Number(localStorage.getItem('draws')) : 0,
	)
	const [lastPlayerMove, setLastPlayerMove] = useState<number | null>(null)
	const [showEndingScreen, setShowEndingScreen] = useState(false);


	const boxRef = useRef<Array<RefObject<HTMLDivElement>>>(
		Array(9)
			.fill(null)
			.map(() => useRef<HTMLDivElement>(null)),
	)
	const playerRef = useRef<Array<RefObject<HTMLSpanElement>>>(
		Array(9)
			.fill(null)
			.map(() => useRef<HTMLSpanElement>(null)),
	)

	useEffect(() => {
		if (symbol) {
			PLAYER.HUMAN = symbol
			PLAYER.AI = symbol === '⭕️' ? '❌' : '⭕️'
			setCurrentPlayer(symbol)
		}
	}, [symbol])

	useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			event.preventDefault()
			event.returnValue = ''
		}

		window.addEventListener('beforeunload', handleBeforeUnload)
		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [])

	useEffect(() => {
		const winningConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		for (let i = 0; i < winningConditions.length; i++) {
			const [a, b, c] = winningConditions[i]

			if (board[a] === board[b] && board[b] === board[c] && board[a]) {
				if (!winnerDeclared) {
					setWinner(board[a])
					setWinnerDeclared(true)

					boxRef.current.forEach((el) =>
						el?.current?.classList.remove('box'),
					)
					boxRef.current.forEach((el) =>
						el?.current?.classList.add('boxed'),
					)
					boxRef.current[a]?.current?.classList.add('winner')
					boxRef.current[b]?.current?.classList.add('winner')
					boxRef.current[c]?.current?.classList.add('winner')

					if (board[a] === PLAYER.HUMAN) {
						const newScoreA = scoreA + 1
						setScoreA(newScoreA)
						setCurrentPlayer(PLAYER.HUMAN)

						localStorage.setItem('scoreA', newScoreA.toString())
					} else {
						const newScoreB = scoreB + 1
						setScoreB(newScoreB)
						setCurrentPlayer(PLAYER.AI)

						localStorage.setItem('scoreB', newScoreB.toString())
					}
					setGamesPlayed(roundsPlayed + 1)
				}
				setTimeout(() => {
					setShowModal(true)
				}, 1000)
				return
			}
		}

		if (moveCount === 9 && !winnerDeclared) {
			setWinner('Draw!')
			setWinnerDeclared(true)
			const newDraws = draws + 1
			setDraws(newDraws)
			setGamesPlayed(roundsPlayed + 1)
			localStorage.setItem('draws', newDraws.toString())
			setTimeout(() => {
				setShowModal(true)
			}, 1000)
		}

		if (moveCount === 0 && currentPlayer === PLAYER.AI && !winner) {
			randomFirstMove()
		} else if (currentPlayer === PLAYER.AI && !winner) {
			setTimeout(aiMove, 500)
		}
	}, [board, moveCount, scoreA, scoreB, draws, winnerDeclared])

	useEffect(() => {
        if (roundsPlayed === totalRoundsToPlay && showModal) {
            const timer = setTimeout(() => {
                setShowEndingScreen(true);
            }, 2000); // 2 seconds delay

            return () => clearTimeout(timer); // Cleanup on component unmount
        }
    }, [roundsPlayed, showModal, totalRoundsToPlay]);

	const handleGameStart = (
		totalRoundsToPlay: number,
		selectedSymbol: Player,
	) => {
		setTotalRoundsToPlay(totalRoundsToPlay)
		setSymbol(selectedSymbol)
	}

	function randomFirstMove() {
		const emptyIndexes = board
			.map((value, index) => (value === null ? index : null))
			.filter((val): val is number => val !== null)
		const randomIndex =
			emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)]
		handleClickBox(randomIndex)
	}

	function aiMove() {
		const bestMove = minimax(board, PLAYER.AI)
		if (bestMove && bestMove.index !== undefined) {
			handleClickBox(bestMove.index)
		}
	}

	function minimax(board: Player[], player: Player): MinimaxResult {
		const availableSpots = board
			.map((value, index) => (value === null ? index : null))
			.filter(
				(val): val is number => val !== null && val !== lastPlayerMove,
			)

		if (checkWin(board, PLAYER.AI)) {
			return { score: 10 }
		} else if (checkWin(board, PLAYER.HUMAN)) {
			return { score: -10 }
		} else if (availableSpots.length === 0) {
			return { score: 0 }
		}

		const moves: MinimaxResult[] = []
		for (let i = 0; i < availableSpots.length; i++) {
			const move: MinimaxResult = { index: availableSpots[i] }

			board[availableSpots[i]] = player

			const result = minimax(
				board,
				player === PLAYER.AI ? PLAYER.HUMAN : PLAYER.AI,
			)
			move.score = result.score

			board[availableSpots[i]] = null

			moves.push(move)
		}

		let bestMove: MinimaxResult | undefined
		if (player === PLAYER.AI) {
			let bestScore = -Infinity
			for (let i = 0; i < moves.length; i++) {
				if (
					moves[i].score !== undefined &&
					moves[i].score > bestScore
				) {
					bestScore = moves[i].score
					bestMove = moves[i]
				}
			}
		} else {
			let bestScore = Infinity
			for (let i = 0; i < moves.length; i++) {
				if (
					moves[i].score !== undefined &&
					moves[i].score < bestScore
				) {
					bestScore = moves[i].score
					bestMove = moves[i]
				}
			}
		}

		return bestMove || { index: -1 }
	}

	function checkWin(board: Player[], player: Player) {
		const winningConditions = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		]

		return winningConditions.some((condition) =>
			condition.every((index) => board[index] === player),
		)
	}

	const handleClickBox = (index: number) => {
		if (board[index] || winner) return
		const updatedBoard = [...board]
		updatedBoard[index] = currentPlayer
		playerRef.current[index]?.current?.classList.add('bouncein')
		setBoard(updatedBoard)
		setCurrentPlayer(
			currentPlayer === PLAYER.HUMAN ? PLAYER.AI : PLAYER.HUMAN,
		)
		setMoveCount(moveCount + 1)
		setLastPlayerMove(index)
	}

	const handleResetRound = () => {
		setBoard(Array(9).fill(null))
		setMoveCount(0)
		setWinner(null)
		setWinnerDeclared(false)
		setShowModal(false)
		setShowEndingScreen(false)
		playerRef.current.forEach((el) =>
			el?.current?.classList.remove('bouncein'),
		)
		boxRef.current.forEach((el) => el?.current?.classList.remove('boxed'))
		boxRef.current.forEach((el) => el?.current?.classList.remove('winner'))
		boxRef.current.forEach((el) => el?.current?.classList.add('box'))
		setLastPlayerMove(null)

		if (roundsPlayed === totalRoundsToPlay) {
			handleResetMatch()
		}
	}

	const handleResetMatch = () => {
		setScoreA(0)
		setScoreB(0)
		setDraws(0)
		localStorage.removeItem('scoreA')
		localStorage.removeItem('scoreB')
		localStorage.removeItem('draws')
		setTotalRoundsToPlay(0)
		setGamesPlayed(0)
		setBoard(Array(9).fill(null))
		setMoveCount(0)
		setWinner(null)
		setWinnerDeclared(false)
		setShowModal(false)
		setShowEndingScreen(false)
		playerRef.current.forEach((el) =>
			el?.current?.classList.remove('bouncein'),
		)
		boxRef.current.forEach((el) => el?.current?.classList.remove('boxed'))
		boxRef.current.forEach((el) => el?.current?.classList.remove('winner'))
		boxRef.current.forEach((el) => el?.current?.classList.add('box'))
		setLastPlayerMove(null)
		setCurrentPlayer(PLAYER.HUMAN)
	}

	return totalRoundsToPlay === 0 ? (
        <GameConfig
            onStart={handleGameStart}
            onHandleClickButton={handleResetMatch}
        />
    ) : (
		<>
			<section className="card">
				<div>
					<p
						style={{ fontSize: '1.2em' }}
						className={showModal ? 'blur' : ''}
					>
						<strong>Score</strong> 👤 {PLAYER.HUMAN} ❯{' '}
						<strong>{scoreA}</strong> | 💻 {PLAYER.AI} ❯{' '}
						<strong> {scoreB} </strong> | ⚖️ ❯
						<strong> {draws}</strong>
						<br />
						<span style={{ fontSize: '.8em' }}>
							🕹️ {roundsPlayed} of {totalRoundsToPlay} Rounds{' '}
						</span>
					</p>
				</div>

				<div className={showModal ? 'container blur' : 'container'}>
					<div className="board">
						{board.map((player, index) => (
							<div
								key={index}
								className={
									player
										? 'boxSelected'
										: 'box' +
											(winner &&
											boxRef.current[
												index
											]?.current?.classList.contains(
												'winner',
											)
												? ' winner'
												: '')
								}
								onClick={() => handleClickBox(index)}
								ref={boxRef.current[index]}
							>
								<span ref={playerRef.current[index]}>
									{player}
								</span>
							</div>
						))}
					</div>
				</div>
				<div>
					{!winner && (
						<p>
							💬 Waiting for the player {currentPlayer} movement!
						</p>
					)}
					<p>
						<img
							src="./Globant-LightBG-Color.png"
							className="logo"
							alt="React logo"
						/>
					</p>
					{/* <button
						onClick={handleResetMatch}
						className={showModal ? 'blur' : ''}
					>
						Reset Match!
					</button> */}

					{/* <p>
						<button
							className={showModal ? 'blur' : ''}
							onClick={handleResetRound}
						>
							{roundsPlayed === totalRoundsToPlay
								? 'Continue'
								: 'Restart Round'}
						</button>
					</p> */}
				</div>
			</section>
			{winner && roundsPlayed < totalRoundsToPlay && (
				<Modal
					show={showModal}
					winner={winner}
					onHandleClickButton={handleResetRound}
				/>
			)}
			 {/* Conditional Rendering of EndingScreen */}
			 {showEndingScreen && (
                <EndingScreen
                    player={PLAYER}
                    scores={[scoreA, scoreB]}
                    onHandleClickButton={handleResetMatch}
                />
            )}
		</>
	)
}
