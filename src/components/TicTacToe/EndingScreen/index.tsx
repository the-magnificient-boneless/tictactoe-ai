import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import Typewriter from 'typewriter-effect/dist/core'

import TypewriterComponent from '../Typewriter'
import Fireworks from '../Fireworks'
import RainEffect from '../RainEffect'
import ParticlesEffect from '../ParticlesEffect'

import './EndingScreen.css'

export default function EndingScreen({
	winner,
	onHandleClickButton,
	scoreA,
	scoreB,
}) {
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
	const [currentLabelIndex, setCurrentLabelIndex] = useState(0)

	const typewriterRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * retryLabels.length)
		setCurrentLabelIndex(randomIndex) // Store the index, not the label itself

		if (typewriterRef.current) {
			const typewriter = new Typewriter(typewriterRef.current, {
				strings: [retryLabels[randomIndex]], // Single string for this effect
				autoStart: true,
				loop: true, // No loop for this effect
				delay: 50, // Adjust typing speed if needed
			})

			typewriter.deleteAll().start() // Clear any previous text

			// Change label after the effect finishes
			typewriter.once('complete', () => {
				setTimeout(() => {
					const newIndex = (randomIndex + 1) % retryLabels.length
					setCurrentLabelIndex(newIndex)
				}, 3000) // 3-second delay before next change
			})
		}
	}, [currentLabelIndex])

	return (
		<>
			{/*{scores.scoresA <= scores.scoresB ? <RainEffect /> : <Fireworks />}*/}
			{scoreA < scoreB && <RainEffect />}
			{scoreA === scoreB && <ParticlesEffect />}
			{scoreA > scoreB && <Fireworks />}

			<section className="endingContainer">
				<div className="endingCard">
					<h2>
						{scoreA < scoreB && <>You Lose!</>}
						{scoreA === scoreB && <>It's a Draw</>}
						{scoreA > scoreB && <>You Win!</>}
					</h2>

					<TypewriterComponent
						text={retryLabels[currentLabelIndex]}
					/>
					<button onClick={onHandleClickButton}>Retry!!!</button>
				</div>
			</section>
		</>
	)
}

EndingScreen.propTypes = {
	winner: PropTypes.any.isRequired,
	onHandleClickButton: PropTypes.func.isRequired,
}
