import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Fireworks from '../Fireworks'

import './EndingScreen.css'

export default function EndingScreen({ onHandleClickButton, scores, player }) {
	const retryLabels = [
		'Try Again! The AI is Waiting!',
		'One More Round?',
		'Give It Another Go!',
		'Can You Beat the AI This Time?',
		"Retry and Show the AI Who's Boss!",
		'Up for Another Challenge?',
		'Another Round Awaits!',
		'Think You Can Win Now?',
		"Don't Let the AI Win! Try Again!",
		'Ready for a Rematch?',
		'Go Again and Beat the AI!',
		'Retry! You Got This!',
		'One More Shot at Victory?',
		'Can You Outplay the AI Now?',
		"Don't Give Up! Try Again!",
		"Let's Play Again!",
		'Another Chance to Win!',
		'Can You Defeat the AI This Time?',
		'Up for the Challenge Again?',
		'Give It Another Try!',
		'Ready for Another Round?',
		'Go for It! Try Again!',
		"Show the AI What You've Got!",
		"Don't Let the AI Have All the Fun!",
		'Think You Can Win This Time?',
		'Try Again and Win!',
		'One More Try for Victory!',
		'Can You Outsmart the AI?',
		"Don't Give Up Yet! Try Again!",
		'Rematch! You Can Win!',
		'Give It Another Shot!',
		'Play Again and Beat the AI!',
		"Don't Let the AI Win Again!",
		'Think You Can Win Now?',
		'Try Again and Show Your Skills!',
		'Ready to Beat the AI?',
		'Another Chance to Shine!',
		'Go for the Win! Try Again!',
		"Show the AI Who's Boss!",
		"Don't Let the AI Have the Last Laugh!",
		'Ready for a Rematch?',
		'Play Again and Win!',
		'Can You Beat the AI This Time?',
		'One More Round for Glory!',
		"Don't Give Up! Try Again!",
		'Give It Another Go!',
		'Show the AI What You Can Do!',
		'Think You Can Win Now?',
		'Go for the Win! Try Again!',
		'Ready for Another Challenge?',
	]

	const [retryLabel, setRetryLabel] = useState('')

	useEffect(() => {
		setRetryLabel(
			retryLabels[Math.floor(Math.random() * retryLabels.length)],
		)
	}, [])

	return (
		<>
			<Fireworks />

			<section className="endingContainer">
				<div className="endingCard">
					<h1>
						Player{' '}
						{scores.scoresA > scores.scoresB
							? player.HUMAN
							: player.AI}{' '}
						Won!
					</h1>
					<h2>{retryLabel}</h2>
					<button onClick={onHandleClickButton}>Retry!!!</button>
				</div>
			</section>
		</>
	)
}

EndingScreen.propTypes = {
	player: PropTypes.any.isRequired,
	scores: PropTypes.array.isRequired,
	onHandleClickButton: PropTypes.func.isRequired,
}
