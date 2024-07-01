import React, { useState, useEffect } from 'react'
import './GameConfig.css'

type Player = '❌' | '⭕️' | string

interface GameConfigProps {
	onStart: (totalRoundsToPlay: number, symbol: Player) => void
	onHandleClickButton: () => void
}

function GameConfig({ onStart, onHandleClickButton }: GameConfigProps) {
	const [totalRoundsToPlay, setTotalGames] = useState(3)
	const [symbol, setSymbol] = useState('')
	const [step, setStep] = useState(1)
	const [label, setLabel] = useState('')
	const [errorMessage, setErrorMessage] = useState('')

	const labels = [
		'How many rounds until you claim victory?',
		"Dare to set a number of rounds you'll win?",
		'Challenge accepted: How many rounds will you conquer?',
		'How many rounds can you endure against the AI?',
		'Prove your skills: How many rounds will you dominate?',
		'How many rounds will it take to prove your worth?',
		'Set your goal: How many rounds will you win?',
		'The AI awaits: How many rounds can you handle?',
		'Show your prowess: How many rounds will you triumph?',
		'How many rounds until the AI meets its match?',
		'Rise to the challenge: How many rounds can you win?',
		'How many rounds will it take to outsmart the AI?',
		'Gear up: How many rounds are you aiming for?',
		'How many rounds will you survive against the AI?',
		'How many rounds until you achieve victory?',
		'Push your limits: How many rounds will you win?',
		'Set your target: How many rounds will you conquer?',
		'How many rounds will it take to beat the AI?',
		'Show your strategy: How many rounds will you win?',
		'How many rounds will you claim as a champion?',
	]

	useEffect(() => {
		setLabel(labels[Math.floor(Math.random() * labels.length)])
	}, [])

	const handleStart = () => {
		if (totalRoundsToPlay > 0 && symbol) {
			onHandleClickButton()
			onStart(totalRoundsToPlay, symbol)
		} else {
			setErrorMessage('Please select a player!!!')
		}
	}

	return (
		<section className="gameContainerConfig">
			<div className="game-config">
				<p>
					{' '}
					<img
						src="./Globant-LightBG-Color.png"
						className="logo"
						alt="React logo"
					/>
				</p>
				<h1>New match!</h1>
				<div className={step === 1 ? 'bouncein' : 'hidden'}>
					<h2>💬 {label}</h2>
					<label>
						Rounds:&nbsp;
						<input
							type="number"
							value={totalRoundsToPlay}
							onChange={(e) =>
								setTotalGames(Number(e.target.value))
							}
							min="3"
							max="11"
						/>
					</label>
					<p>
						<button onClick={() => setStep(2)} className="start">
							Next Step!
						</button>
						<br />
					</p>
				</div>
				<div className={step === 2 ? 'bouncein' : 'hidden'}>
					<h2>Select Player</h2>
					<button
						className="btnPlayer"
						onClick={() => {
							setSymbol('❌')
							setErrorMessage('')
						}}
					>
						❌
					</button>
					<button
						className="btnPlayer"
						onClick={() => {
							setSymbol('⭕️')
							setErrorMessage('')
						}}
					>
						⭕️
					</button>
					<p>
						{errorMessage && (
							<span className="error-message">
								{' '}
								⛔️ {errorMessage}
							</span>
						)}
					</p>
					<p>
						<button onClick={handleStart} className="start">
							Start!
						</button>
						<br />
					</p>
					<p>
						<button onClick={() => setStep(1)} className="steps">
							{' '}
							⬅️ Previous Step!
						</button>
						<br />
					</p>
				</div>
			</div>
		</section>
	)
}

export default GameConfig
