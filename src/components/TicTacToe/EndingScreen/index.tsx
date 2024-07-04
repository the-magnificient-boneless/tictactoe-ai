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
		'¡Inténtalo de nuevo! ¡La IA te está esperando!',
		'¿Una ronda más?',
		'¡Dale otra oportunidad!',
		'¿Puedes vencer a la IA esta vez?',
		'¡Reintenta y demuestra a la IA quién manda!',
		'¿Listo para otro desafío?',
		'¡Te espera otra ronda!',
		'¿Crees que puedes ganar ahora?',
		'¡No dejes que la IA gane! ¡Inténtalo de nuevo!',
		'¿Listo para la revancha?',
		'¡Vuelve a intentarlo y vence a la IA!',
		'¡Reintenta! ¡Tú puedes!',
		'¿Una oportunidad más para la victoria?',
		'¿Puedes superar a la IA ahora?',
		'¡No te rindas! ¡Inténtalo de nuevo!',
		'¡Vamos a jugar otra vez!',
		'¡Otra oportunidad de ganar!',
		'¿Puedes derrotar a la IA esta vez?',
		'¿Listo para el desafío de nuevo?',
		'¡Dale otra oportunidad!',
		'¿Listo para otra ronda?',
		'¡Adelante! ¡Inténtalo de nuevo!',
		'¡Muestra a la IA lo que tienes!',
		'¡No dejes que la IA se divierta toda!',
		'¿Crees que puedes ganar esta vez?',
		'¡Inténtalo de nuevo y gana!',
		'¡Un intento más para la victoria!',
		'¿Puedes engañar a la IA?',
		'¡No te rindas todavía! ¡Inténtalo de nuevo!',
		'¡Revancha! ¡Tú puedes ganar!',
		'¡Dale otro intento!',
		'¡Juega de nuevo y vence a la IA!',
		'¡No dejes que la IA gane de nuevo!',
		'¿Crees que puedes ganar ahora?',
		'¡Inténtalo de nuevo y muestra tus habilidades!',
		'¿Listo para vencer a la IA?',
		'¡Otra oportunidad para brillar!',
		'¡Ve por la victoria! ¡Inténtalo de nuevo!',
		'¡Demuestra a la IA quién manda!',
		'¡No dejes que la IA tenga la última risa!',
		'¿Listo para la revancha?',
		'¡Juega de nuevo y gana!',
		'¿Puedes vencer a la IA esta vez?',
		'¡Una ronda más para la gloria!',
		'¡No te rindas! ¡Inténtalo de nuevo!',
		'¡Dale otra oportunidad!',
		'¡Muestra a la IA lo que puedes hacer!',
		'¿Crees que puedes ganar ahora?',
		'¡Ve por la victoria! ¡Inténtalo de nuevo!',
		'¿Listo para otro desafío?',
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
						{scoreA === scoreB && <>¡Es empate!</>}
						{scoreA < scoreB && <>!Has perdido!</>}
						{scoreA > scoreB && <>¡Vaya Ganaste!</>}
					</h2>

					<TypewriterComponent
						text={retryLabels[currentLabelIndex]}
					/>
					<button onClick={onHandleClickButton} className="btnYep">
						Intentar Nuevamente!!!
					</button>
				</div>
			</section>
		</>
	)
}

EndingScreen.propTypes = {
	winner: PropTypes.any.isRequired,
	onHandleClickButton: PropTypes.func.isRequired,
}
