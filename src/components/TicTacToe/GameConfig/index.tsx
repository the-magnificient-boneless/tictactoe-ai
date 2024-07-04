import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import TypewriterComponent from '../Typewriter'
import { MongoClient, ServerApiVersion } from 'mongodb'

import './GameConfig.css'

type Player = '❌' | '⭕️' | string

interface GameConfigProps {
	onStart: (totalRoundsToPlay: number, symbol: Player) => void
	onHandleClickButton: () => void
}

function GameConfig({ onStart, onHandleClickButton }: GameConfigProps) {
	const [totalRoundsToPlay, setTotalGames] = useState(1)
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

	// Import MongoDB Client and Nodemailer

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
					'https://us-east-1.aws.data.mongodb-api.com/app/data-zlgaoxd/endpoint/data/v1/action/findOne',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'Access-Control-Request-Headers': '*',
							'api-key':
								'kjINnVzjtmVJq9lxqEnBoZrFacILdS6N3N384zSi53b01dtKvInIN7MKGr0Ogl78',
						},
						body: JSON.stringify({
							collection: 'csvData',
							database: 'tictactoe',
							dataSource: 'Cluster0',
							projection: { _id: 1 },
							document: csvData,
						}),
					},
				)

				if (!response.ok) {
					throw new Error('Network response was not ok')
				}

				const result = await response.json()
				console.log('Data inserted into MongoDB:', result)

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
		'¿Cuántas rondas hasta que reclames la victoria?',
		'¿Te atreves a establecer un número de rondas que ganarás?',
		'Reto aceptado: ¿Cuántas rondas ganarás?',
		'¿Cuántas rondas puedes aguantar contra la IA?',
		'Demuestra tus habilidades: ¿Cuántas rondas dominarás?',
		'¿Cuántas rondas tomará para probar tu valentía?',
		'Establece tu objetivo: ¿Cuántas rondas ganarás?',
		'La IA te espera: ¿Cuántas rondas puedes ganar?',
		'Muestra tu destreza: ¿En cuántas rondas triunfarás?',
		'¿Cuántas rondas hasta que seas superior a la IA?',
		'Supérate: ¿Cuántas rondas puedes ganar?',
		'¿Cuántas rondas te tomará superar a la IA?',
		'Prepárate: ¿Cuántas rondas necesitas para la victoria?',
		'¿Cuántas rondas sobrevivirás contra la IA?',
		'¿Cuántas rondas hasta que logres la victoria?',
		'Supera tus límites: ¿En cuántas rondas ganarás?',
		'Establece tu objetivo: ¿En Cuántas rondas ganarás?',
		'¿Cuántas rondas te tomará para vencer a la IA?',
		'Muestra tu estrategia: ¿Cuántas rondas ganarás?',
		'¿En cuántas rondas te reclamarás como campeón?',
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
	const handleSliderChange = (e) => {
		setTotalGames(parseInt(e.target.value))
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
				<h1>¡Nueva Partida!</h1>
				<div className={step === 1 ? 'bouncein' : 'hidden'}>
					<TypewriterComponent text={labels} />
					<div>
						<p className="roundLabels">
							<span>{totalRoundsToPlay}</span>
						</p>
						<input
							type="range"
							id="roundsSlider"
							value={totalRoundsToPlay}
							onChange={handleSliderChange}
							min="3"
							max="7"
							step="2"
						/>
						<br />
						<label htmlFor="roundsSlider">Rondas</label>
					</div>
					<p>
						<button onClick={() => setStep(2)} className="start">
							Siguiente
						</button>
						<br />
					</p>
				</div>
				<div className={step === 2 ? 'bouncein' : 'hidden'}>
					<h2>Selecciona jugador</h2>
					<button
						className={
							symbol === '❌' ? 'btnSelected' : 'btnPlayer'
						}
						onClick={() => {
							setSymbol('❌')
							setErrorMessage('')
						}}
					>
						❌
					</button>
					<button
						className={
							symbol === '⭕️' ? 'btnSelected' : 'btnPlayer'
						}
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
							¡Comenzar!
						</button>
						<br />
					</p>
					<p>
						<button onClick={() => setStep(1)} className="steps">
							{' '}
							⬅️ Paso Anterior
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
				<button type="submit" onClick={handleSubmit}>
					{isLoading ? 'Guardando...' : 'Enviar'}
				</button>
			</form>
		</>
	)
}

export default GameConfig
