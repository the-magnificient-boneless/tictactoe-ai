import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import TypewriterComponent from '../Typewriter'
import './GameConfig.css'
import RainEffect from '../RainEffect'

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
	const [showForm, setShowForm] = useState(true)
	/*FORM*/
	const [formData, setFormData] = useState({
		nombre: '',
		representaEmpresa: false,
		nombreEmpresa: '',
		cargo: '',
		email: '',
	})
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		const validationErrors = validateForm()

		if (Object.keys(validationErrors).length === 0) {
			const sanitizedFilename = sanitizeFilename('user_data.csv') // Sanitize and add timestamp
			const csvData = {
				data: Object.values(formData).join(','),
				filename: sanitizedFilename,
			}

			try {
				const response = await fetch(
					'http://localhost:3001/save-to-csv',
					{
						// Replace with your actual API endpoint
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(csvData),
					},
				)

				if (response.ok) {
					setIsLoading(false) // Hide loading state
					setFormData({
						nombre: '',
						representaEmpresa: false,
						nombreEmpresa: '',
						cargo: '',
						email: '',
					})
					setShowForm(false)
					console.log('CSV data sent to server successfully')
					// Clear form fields or show success message
				} else {
					const errorData = await response.json()
					console.error(
						'Error saving data:',
						errorData.errors || 'Unknown error',
					)
				}
			} catch (error) {
				console.error('Error submitting form or sending data:', error)
			}
		} else {
			setErrors(validationErrors)
		}
	}

	function sanitizeFilename(filename) {
		// Remove invalid characters or replace them with underscores
		return filename.replace(/[^a-z0-9_.-]/gi, '_')
	}

	const validateForm = () => {
		const errors = {}
		if (!formData.nombre.trim()) {
			errors.nombre = 'El nombre es obligatorio'
		}
		if (!formData.email.trim()) {
			errors.email = 'El email es obligatorio'
		} else if (!validateEmail(formData.email)) {
			errors.email = 'El formato del email es incorrecto'
		}
		if (formData.representaEmpresa && !formData.nombreEmpresa.trim()) {
			errors.nombreEmpresa = 'El nombre de la empresa es obligatorio'
		}
		return errors
	}

	const validateEmail = (email) => {
		// Basic email validation using a regex pattern
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}
	/*END FORM*/
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

	const typewriterRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setLabel(labels[Math.floor(Math.random() * labels.length)])

		if (typewriterRef.current) {
			new Typewriter(typewriterRef.current, {
				strings: labels,
				autoStart: true,
				loop: true,
				pauseFor: 10000,
			})
		}
	}, [])

	const handleStart = () => {
		if (totalRoundsToPlay > 0 && symbol) {
			onHandleClickButton()
			onStart(totalRoundsToPlay, symbol)
		} else {
			setErrorMessage('Please select a player!!!')
		}
	}
	const handleSliderChange = (event) => {
		setTotalGames(parseInt(event.target.value, 10))
	}

	return !showForm ? (
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
					<div style={{ fontSize: '1.5em' }}>
						<TypewriterComponent text={label} />
					</div>
					<div>
						<label htmlFor="roundsSlider">Number of Rounds:</label>
						<input
							type="range"
							id="roundsSlider"
							min="3"
							max="7"
							step="2"
							value={totalRoundsToPlay}
							onChange={handleSliderChange}
						/>

						<p>Selected Rounds: {totalRoundsToPlay}</p>
					</div>
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
	) : (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
					/>
					{errors.nombre && <span>{errors.nombre}</span>}
				</div>

				<div>
					<label htmlFor="representaEmpresa">
						¿Representas alguna empresa?
					</label>
					<input
						type="checkbox"
						id="representaEmpresa"
						name="representaEmpresa"
						checked={formData.representaEmpresa}
						onChange={handleChange}
					/>
				</div>

				{formData.representaEmpresa && (
					<>
						<div>
							<label htmlFor="nombreEmpresa">
								Nombre de la empresa:
							</label>
							<input
								type="text"
								id="nombreEmpresa"
								name="nombreEmpresa"
								value={formData.nombreEmpresa}
								onChange={handleChange}
							/>
							{errors.nombreEmpresa && (
								<span>{errors.nombreEmpresa}</span>
							)}
						</div>
						<div>
							<label htmlFor="cargo">Cargo:</label>
							<input
								type="text"
								id="cargo"
								name="cargo"
								value={formData.cargo}
								onChange={handleChange}
							/>
						</div>
					</>
				)}

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && <span>{errors.email}</span>}
				</div>

				<button type="submit" disabled={isLoading}>
					{isLoading ? 'Saving...' : 'Submit'}
				</button>
			</form>
		</>
	)
}

export default GameConfig
